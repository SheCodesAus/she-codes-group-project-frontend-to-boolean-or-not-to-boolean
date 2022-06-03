import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";



function CreateUserAssignmentForm({user}) {
  // State
  const token = window.localStorage.getItem("token");
  const navigate = useNavigate();
  const [assignment, setAssignment] = useState({
    assignee_id: "",
    
   
  });

  const [collectionList, setCollection] = useState();

  useEffect(() => {
      fetch(`${process.env.REACT_APP_API_URL}view-collections/`)
      .then((results) => {
          console.log("results",results);    
      return results.json();
      })
      
      .then((data) => {
        setCollection(data);
         
      });
     
    
      }, [user.id]);
  
      
  const [winwallList, setWinwallList] = useState();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}win-walls/`)
    .then((results) => {
        console.log("results",results);    
    return results.json();
    })
    
    .then((data) => {
        setWinwallList(data);
       
    });
   
  
    }, [user.id]);

    if (!collectionList) {
        return <h3>Loading..</h3>;
    }
    
    if (!winwallList) {
        return <h3>Loading..</h3>;
    }

  // Actions and Helpers
  const handleChange = (event) => {
    const { id, value } = event.target;
    setAssignment((prevAssignment) => ({
      ...prevAssignment,
      [id]: value,
    }));
  };




  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}assignments/`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
        body: JSON.stringify({
          assignee_id: user.id,
          win_wall_id: assignment.win_wall_id,
          collection_id: assignment.collection_id,
          is_admin: assignment.is_admin,
          is_approver: assignment.is_approver,
         


        }),
      });
      const data = await res.json();
      console.log(data);
      navigate('/auth-assignments/');
    } catch (err) {
      console.log(err);
    }
  };

  if (!token || token===null || token===undefined || token==="undefined") {
    return (
      <Link to="/login">Please login to edit user assignment</Link>
    );
  }

  return (
    <div>
      <h2>Create user assignment</h2>
      
      <form>
        <div> 
        <label htmlFor="win_wall_id">Select a WinWall: </label>
        <select id="win_wall_id" onChange={handleChange}>
            <option value="" disabled selected>Select Wall </option>
            {winwallList.map((w) => (
                <option 
                    key={w.id}
                    value={w.id}>{w.title}
                </option>
            ))}
        </select>
        <p>OR</p>
      </div>
      <div>
        <label htmlFor="collection_id">Select a Collection: </label>
        <select id="collection_id" onChange={handleChange}>
            <option value="" disabled selected>Select Collection </option>
            {collectionList.map((c) => (
                <option 
                    key={c.id}
                    value={c.id}>{c.title}
                </option>
            ))}
        </select>
      </div>
      <div>
        <label htmlFor="is_admin">Is Admin: </label>
        <select id="is_admin" onChange={handleChange}>
        <option value="">--Please choose an option</option>
            <option value={true}>True</option>
            <option value={false}>False</option>
            
        </select>
      </div>
      <div>
        <label htmlFor="is_approver">Is Approver: </label>
        <select id="is_approver" onChange={handleChange}>
        <option value="">--Please choose an option</option>
            <option value={true}>True</option>
            <option value={false}>False</option>
        </select>
      </div>
     
      
      <button type="submit" onClick={handleSubmit} className="all-btn">
        Create Assignment
      </button>
    </form>

    </div>
  );
}

export default CreateUserAssignmentForm;

   