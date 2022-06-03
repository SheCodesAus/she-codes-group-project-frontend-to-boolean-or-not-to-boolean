import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./WinWallForm.css";


function WinWallForm({ collectionId }) {

  const token = window.localStorage.getItem("token");
    const SuperUser = window.localStorage.getItem("is_superuser");
    const Admin = window.localStorage.getItem("is_shecodes_admin");
    const Approver = window.localStorage.getItem("is_approver");
   
    const isAdmin = (Admin == 'true')
    const isApprover = (Approver == 'true')
    const isSuperUser = (SuperUser == 'true')

    const assignmentsString = window.localStorage.getItem("assignments");
    const assignments = assignmentsString ? JSON.parse(assignmentsString) : [];
   
    
    const navigate = useNavigate();

  
  const [winwall, setWinwall] = useState({
      title: "",
      image: "",
      start_date: "",
      end_date: "",
      is_exported: "",
      
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
          const res = await fetch(`${process.env.REACT_APP_API_URL}admin-win-walls/`, {

            method: "post",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Token ${token}`,
            },
            body: JSON.stringify({
              
            collection_id: collectionId,
            title: winwall.title,
            image: winwall.image,
            start_date: winwall.start_date,
            end_date: winwall.end_date,
            is_exported: false,
              
            }),
          });
          const data = await res.json();

    let isAssignedAdmin = false;
    

    for (let index = 0; index < assignments.length; index++) {
        const element = assignments[index];

        const collection_assignment = element.collection_id
        const winwall_assignment = element.win_wall_id
        
        const assigned_admin = element.is_admin

        isAssignedAdmin = isAssignedAdmin || (assigned_admin == true && (winwall_assignment == winwall.id || collection_assignment == winwall.collection_id ))
    }

        if (!isSuperUser || !isAdmin || !isAssignedAdmin) {
            return (
              <Link to="/login">Please login to create a win wall.</Link>
            );
        }
          // Send user to a new win wall pge URL after clicking the 'create' button
          
        else { navigate(`/win-wall/${data.id}/`); }
        } catch (err) {
          console.log(err);
        }
    };
  
    
    
    
   
    return (
        
        <form>
       <div>
        <label className="form-text" htmlFor="title">Title: </label>
        <input
            type="text"
            id="title"
            placeholder="Give your win wall a title"
            onChange={handleChange}
          />
        </div>

        {/* <div><label className="form-text" htmlFor="title">Collection: </label>

            <select id="collection_id" onChange={handleChange}>
                <option value="">--Choose a collection--</option>           
            {collectionList.map((item) => {
              <option key={item.id} value={item.id}> {item.title} </option>;
          })}
          </select>
        </div> */}

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