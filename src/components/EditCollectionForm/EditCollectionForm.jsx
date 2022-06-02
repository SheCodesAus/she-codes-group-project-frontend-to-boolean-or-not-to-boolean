import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link, useParams } from "react-router-dom";
import "./EditCollectionForm.css";

function EditCollectionForm({ collection }) {
  
    const token = window.localStorage.getItem("token");
    const [editCollection, setEditCollection] = useState(collection);
    const navigate = useNavigate();
    const { id } = useParams();


    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}collection/${id}/`)
        .then((results) => {
            console.log("results",results);    
        return results.json();
        })
        
        .then((data) => {
            setEditCollection(data);
        });
      
        }, [id]);
    
        
        if (!editCollection) {
            return <h3>Loading..</h3>;
        }
    
    const handleChange = (event) => {
        const { id, value } = event.target;
        setEditCollection((prevEditCollection) => ({
          ...prevEditCollection,
          [id]: value,
        }));
    };
    
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          const res = await fetch(`${process.env.REACT_APP_API_URL}admin-collection/${editCollection.id}/`, {
            method: "put",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Token ${token}`,
            },
            body: JSON.stringify({
              title: editCollection.title,
              image: editCollection.image,
    
            }),
          });
          const data = await res.json();
          console.log(data);
          
          navigate(`/collections/`); 
        } catch (err) {
          console.log(err);
        }
      };
    
      if (!token || token===null || token===undefined || token==="undefined"){
        return (
          <Link to="/login">Please log in to edit this collection</Link>
        );
      }
  

    return (
        
        <form>
       <div>
        <label className="form-text" htmlFor="title">Title: </label>
        <input
            type="text"
            id="title"
            value={editCollection.title}
            onChange={handleChange}
          />
        </div>

        <div>
        <label className="form-text" htmlFor="image">Cover image: </label>
        <input
            type="url"
            id="image"
            value={editCollection.image}
            onChange={handleChange}
          />
        </div>
                    
        <button type="submit" onClick={handleSubmit}>
        Save changes
        </button>

        </form>
    )
}


export default EditCollectionForm;