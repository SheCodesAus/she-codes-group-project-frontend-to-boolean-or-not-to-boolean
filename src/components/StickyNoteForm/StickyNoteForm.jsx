import React, { useState } from "react";
import { Link } from "react-router-dom";

function StickyNoteForm({ winwallId }) {
  // State
  const token = window.localStorage.getItem("token");
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
          winwallId: winwallId,
          win_comment: stickynote.win_comment,
         
         
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
      <Link to="/login">at the moment you have to log in to create sticky note</Link>
    );
  }

  return (
    <form className="all-forms">
     
      <div>
        <label htmlFor="win_comment">win_comment:</label>
        <input
          type="text"
          id="win_comment"
          placeholder="Enter your Win Comment"
          onChange={handleChange}
        />
      </div>
      <button type="submit" onClick={handleSubmit} className="all-btn">
        Post
      </button>
    </form>
  );
}

export default StickyNoteForm;