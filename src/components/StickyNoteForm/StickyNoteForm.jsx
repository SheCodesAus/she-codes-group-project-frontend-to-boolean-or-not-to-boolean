import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./StickyNoteForm.css";

function StickyNoteForm({ win_wallId }) {
  // State
  const token = window.localStorage.getItem("token");
  const navigate = useNavigate();
  const [stickynote, setStickynote] = useState({
    win_comment: "",
  });

  // Actions and Helpers
  const handleChange = (event) => {
    const { id, value } = event.target;
    setStickynote((prevStickynote) => ({
      ...prevStickynote,
      [id]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}sticky-note/`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
        body: JSON.stringify({
          win_wall_id: win_wallId,
          win_comment: stickynote.win_comment,
         
         
        }),
      });
      const data = await res.json();
      console.log(data);
      navigate(`/win-wall/${win_wallId}/`); 
    } catch (err) {
      console.log(err);
    }
  };

  if (!token || token===null || token===undefined || token==="undefined") {
    return (
      <Link to="/login">at the moment you have to log in to create sticky note</Link>
    );
  }

  return (
      <div>
    <form className="sticky-note">
     
      
        {/* <label htmlFor="win_comment">win_comment:</label> */}
        <textarea
        
        
          placeholder="Enter your Win!"
          onChange={handleChange}
        />
     
      
    </form>
    <button type="submit" onClick={handleSubmit} className="sticky-note-btn">
    Post
  </button>
  </div>
  );
}

export default StickyNoteForm;