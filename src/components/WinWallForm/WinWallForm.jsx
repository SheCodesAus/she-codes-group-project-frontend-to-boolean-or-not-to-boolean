import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./WinWallForm.css";

function WinWallForm() {

  const token = window.localStorage.getItem("token");
  
  const [winwall, setWinwall] = useState({
      collection: "",
      name: "",
      image: "",
      start_date: "",
      end_date:"",
    });

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
            method: "post",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Token ${token}`,
            },
            body: JSON.stringify({
              
            collection: winwall.collection,
            name: winwall.name,
            image: winwall.image,
            start_date: winwall.start_date,
            end_date: winwall.end_date
              
         
  
            }),
          });
          const data = await res.json();
          console.log(data);
        } catch (err) {
          console.log(err);
        }
      };
  
      if (!token || token===null || token===undefined || token==="undefined") {
          return (
            <Link to="/login">Please login to create a project</Link>
          );
      }
      
    
    
    return (
        
        <form>
        <div>

            <select id="collection" onChange={handleChange}>
                <option value="">--Choose a collection--</option>
                <option value={1}>SheCodes HTML 1 Day Workshop</option>
                <option value={2}>SheCodes Python 1 Day Workshop</option>
            </select>
        </div>

        <div>
        <input
            type="text"
            id="name"
            placeholder="Name"
            onChange={handleChange}
          />
        </div>
            
        <div>
        <input
            type="date"
            id="start_date"
            placeholder="Enter a start date"
            onChange={handleChange}
          />
        </div>
            
        <div>
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