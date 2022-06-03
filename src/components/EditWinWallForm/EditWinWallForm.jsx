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
          const res = await fetch(`${process.env.REACT_APP_API_URL}admin-win-wall/${editWinwall.id}/`, {
            method: "put",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Token ${token}`,
            },
            body: JSON.stringify({
              title: editWinwall.title,
              image: editWinwall.image,
              start_date:editWinwall.start_date,
              end_date:editWinwall.end_date,
    
            }),
          });
          const data = await res.json();
          console.log(data);
          
          navigate(`/collection/${editWinwall.collection_id}`); 
        } catch (err) {
          console.log(err);
        }
      };
    
      if (!token || token===null || token===undefined || token==="undefined"){
        return (
          <Link to="/login">Please Log In to edit this Win Wall page.</Link>
        );
      }


    // formatting date for editing 

    const startDateInput = new Date (editWinwall.start_date);
    const endDateInput = new Date (editWinwall.end_date);

    const startMonth = startDateInput.getMonth() < 10 ? '0' + startDateInput.getMonth():startDateInput.getMonth();
    const startDate = startDateInput.getDate() < 10 ? '0' + startDateInput.getDate():startDateInput.getDate();
    const startDateFormat = `${startDateInput.getFullYear()}-${startMonth}-${startDate}`
    
    const endMonth = endDateInput.getMonth() < 10 ? '0' + endDateInput.getMonth():endDateInput.getMonth();
    const endDate = endDateInput.getDate() < 10 ? '0' + endDateInput.getDate():endDateInput.getDate();
    const endDateFormat = `${endDateInput.getFullYear()}-${endMonth}-${endDate}`

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

        <div>
        <label className="form-text" htmlFor="start_date">Start Date: </label>
        <input
            type="date"
            id="start_date"
            value={startDateFormat}
            onChange={handleChange}
          />
        </div>
            
        <div>
        <label className="form-text" htmlFor="end_date">End date: </label>
        <input
            type="date"
            id="end_date"
            value={endDateFormat}
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