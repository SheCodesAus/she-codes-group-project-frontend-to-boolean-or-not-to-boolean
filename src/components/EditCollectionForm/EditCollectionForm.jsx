import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link, useParams } from "react-router-dom";
import "./EditCollectionForm.css";

function EditCollectionForm({ collection }) {
  
    const [editCollection, setEditCollection] = useState(collection);
    const { id } = useParams();

  
    const handleChange = (event) => {
        const { id, value } = event.target;
        setEditCollection((prevEditCollection) => ({
          ...prevEditCollection,
          [id]: value,
        }));
    };
    
    const navigate = useNavigate();
    
    const handleSubmit = async (event) => {
        event.preventDefault();

        const token = window.localStorage.getItem("token");
        if (!token) return;

        const updatedCollection = {}
        if (collection.title !== editCollection.title) updatedCollection.title = editCollection.title
        if (collection.image !== editCollection.image) updatedCollection.image = editCollection.image


        if (Object.keys(updatedCollection).length > 0) {
            try {
                const res = await 
                fetch(`${process.env.REACT_APP_API_URL}collection/${collection.id}/`, {
                    method:"put",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Token ${token}`,
                    },
                    body: JSON.stringify({...updatedCollection}),
                });
                const data = await res.json()
                console.log(data);

                navigate(`/collection/${collection.id}/`);               
            } catch(err) {
            }
        }
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