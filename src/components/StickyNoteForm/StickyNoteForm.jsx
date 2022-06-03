import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./StickyNoteForm.css";

function StickyNoteForm({ win_wallId }) {
  // State
  const token = window.localStorage.getItem("token");
  const isUserLoggedin = !(token === null || token === undefined || token === "undefined")
  const navigate = useNavigate();
  const [stickynote, setStickynote] = useState({
    win_comment: "",
    is_win_comment_valid: false,
    error_message: ""
  });

  const [WinwallData, setWinwallData] = useState();
   
  const { id } = useParams();
  useEffect(() => {
      fetch(`${process.env.REACT_APP_API_URL}win-wall/${id}/`)
      .then((results) => {
      return results.json();
       })
          .then((data) => {
       setWinwallData(data);
       console.log("data", data);
       });

  }, []);


   if (!WinwallData) {
       return <h3>Loading..</h3>;
   }


  const WallStatus = WinwallData.is_open;
  const WallClosed = WallStatus == false;
  const WallLive = WallStatus == true;




let validateField = (win_comment, value) => {
    let errorMsg = null;
    switch (win_comment) {
      case "win_comment":
        if (!value) errorMsg = "Please enter your Win Comment.";
        else if (value.length > 200 )errorMsg = 'Max Length is 200';
        break;
  }
    return errorMsg;
    };

  // Actions and Helpers
  const handleChange = (event) => {
    const { id, value } = event.target;
    let errorMessage = validateField(id, value);
    let isValid = errorMessage == null;
    setStickynote((prevStickynote) => ({
      ...prevStickynote,
      [id]: value,
      is_win_comment_valid : isValid,
      error_message : errorMessage
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if(!stickynote.is_win_comment_valid) return;
   let headers = {
    "Content-Type": "application/json",
   
    };

    if (isUserLoggedin) {
      headers.Authorization = `Token ${token}`;
    }

    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}sticky-notes/`, {
        method: "post",
        headers: headers,
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

 if (WallLive){

  return (
      <div>
    <form className="sticky-note">
     
      
        {/* <label htmlFor="win_comment">win_comment:</label> */}
        <textarea
        
          id="win_comment"
          placeholder="Enter your Win!"
          onChange={handleChange}
        />
     
        
    </form>
    <div className="formErrors">
        <p>{stickynote.is_win_comment_valid ? '' : stickynote.error_message}</p>
    </div>
    <button type="submit" onClick={handleSubmit} className="sticky-note-btn">
    Post
    </button>
  </div>
  );
}

else if (WallClosed){ 

  return (
    <div>
      <h2>Win Wall is now Closed</h2>
    </div>
      );}

  }

export default StickyNoteForm;