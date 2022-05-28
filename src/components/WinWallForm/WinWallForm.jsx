import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./WinWallForm.css";


function WinWallForm() {

  const token = window.localStorage.getItem("token");
  
  const [winwall, setWinwall] = useState({
      collection: "",
      title: "",
      image: "",
      start_date: "",
      end_date: "",
      is_open: "",
      is_exported: "",
      
    });

    const navigate = useNavigate();
  
    const handleChange = (event) => {
        const { id, value } = event.target;
        setWinwall((prevWinwall) => ({
          ...prevWinwall,
          [id]: value,
        }));
    };
    
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          const res = await fetch(`${process.env.REACT_APP_API_URL}win-walls/`, {
          // const res = await fetch(`http://127.0.0.1:8000/win-walls/`, {

            method: "post",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Token ${token}`,
            },
            body: JSON.stringify({
              
            collection_id: winwall.collection_id,
            title: winwall.title,
            image: winwall.image,
            start_date: winwall.start_date,
            end_date: winwall.end_date,
            is_open: true,
            is_exported: false,
              
            }),
          });
          const data = await res.json();

          // Send user to a new win wall pge URL after clicking the 'create' button
          // navigate(`${process.env.REACT_APP_API_URL}win-wall/${id}`);
          navigate(`/win-wall/${data.id}/`); 
        } catch (err) {
          console.log(err);
        }
    };
  
    
    if (!token || token===null || token===undefined || token==="undefined") {
          return (
            <Link to="/login">Please login to create a win wall.</Link>
          );
      }
    
    return (
        
        <form>
       <div>
        <label className="form-text" htmlFor="title">Title: </label>
        <input
            type="text"
            id="title"
            placeholder="Give your win wall a name"
            onChange={handleChange}
          />
        </div>

        <div>
            <select id="collection" onChange={handleChange}>
                <option value="">--Choose a collection--</option>
            <option value={2}>SheCodes Python 1 Day Workshop</option>
            </select>
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
            
        <div>
        <label className="form-text" htmlFor="start_date">Start date: </label>
        <input
            type="date"
            id="start_date"
            placeholder="Enter a start date"
            onChange={handleChange}
          />
        </div>
            
        <div>
        <label className="form-text" htmlFor="end_date">End date: </label>
        <input
            type="date"
            id="end_date"
            placeholder="Enter a close date"
            onChange={handleChange}
          />
        </div>
             
            
        <button type="submit" onClick={handleSubmit}>
        + Create a Win Wall
        </button>

        </form>
    )
}


export default WinWallForm