import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./CollectionForm.css";

function CollectionForm() {

  const token = window.localStorage.getItem("token");
  
  const [collection, setCollection] = useState({
      title: "",
      image: "",
      is_exported: "",
      // slug: "",
    });

    const navigate = useNavigate();
  
    const handleChange = (event) => {
        const { id, value } = event.target;
        setCollection((prevCollection) => ({
          ...prevCollection,
          [id]: value,
        }));
    };
    
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          const res = await fetch(`${process.env.REACT_APP_API_URL}collections/`, {

            method: "post",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Token ${token}`,
            },
            body: JSON.stringify({
              
            title: collection.title,
            image: collection.image,
            is_exported: false,
            // slug: collection.slug,
              
            }),
          });
          const data = await res.json();

         navigate(`/collection/${data.id}/`); 
        } catch (err) {
          console.log(err);
        }
    };
  
    
    if (!token || token===null || token===undefined || token==="undefined") {
          return (
            <Link to="/login">Please login to create a Collection.</Link>
          );
      }
    
    return (
        
        <form className="form">
       <div>
        <label className="form-text" htmlFor="title">Title: </label>
        <input
            type="text"
            id="title"
            placeholder="Give your collection a title"
            onChange={handleChange}
          />
        </div>

        <div>
        <label className="form-text" htmlFor="image">Cover image: </label>
        <input
            type="url"
            id="image"
            placeholder="Enter a cover image URL"
            onChange={handleChange}
          />
        </div>

        {/* <div>
        <label className="form-text" htmlFor="image">Custom URL: </label>
        <input
            type="text"
            id="slug"
            placeholder="Enter a custom URL"
            onChange={handleChange}
          />
        </div> */}
                    
        <button type="submit" onClick={handleSubmit}>
        + Create a Collection
        </button>

        </form>
    )
}


export default CollectionForm;