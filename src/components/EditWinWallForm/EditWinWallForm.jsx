import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link, useParams } from "react-router-dom";


function EditWinWallForm({ winwall }) {
  
    const token = window.localStorage.getItem("token");
    const [editWinwall, setEditWinwall] = useState(winwall);
    const navigate = useNavigate();
    const { id } = useParams();


    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}win-wall/${id}/`)
          .then((results) => {
        return results.json();
        })
        .then((data) => {
          setEditWinwall(data);
        });
      
        }, [id]);
    
        
        if (!editWinwall) {
            return <h3>Loading..</h3>;
        }
    
    const handleChange = (event) => {
        const { id, value } = event.target;
        setEditWinwall((prevEditWinwall) => ({
          ...prevEditWinwall,
          [id]: value,
        }));
    };
    
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          const res = await fetch(`${process.env.REACT_APP_API_URL}collection/${editWinwall.id}/`, {
            method: "put",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Token ${token}`,
            },
            body: JSON.stringify({
              title: editWinwall.title,
              image: editWinwall.image,
    
            }),
          });
          const data = await res.json();
          
          navigate(`/collection/${editWinwall.id}`); 
        } catch (err) {
          console.log(err);
        }
      };
    
      if (!token || token===null || token===undefined || token==="undefined"){
        return (
          <Link to="/login">Please log in to edit this win wall page.</Link>
        );
      }
  

    return (
        
        <form>
       <div>
        <label className="form-text" htmlFor="title">Title: </label>
        <input
            type="text"
            id="title"
            value={editWinwall.title}
            onChange={handleChange}
          />
        </div>

        <div>
        <label className="form-text" htmlFor="image">Cover image: </label>
        <input
            type="url"
            id="image"
            value={editWinwall.image}
            onChange={handleChange}
          />
        </div>
                    
        <button type="submit" onClick={handleSubmit}>
        Save changes
        </button>

        </form>
    )
}


export default EditWinWallForm;