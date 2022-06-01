import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function EditStickyNoteForm () {

    const token = window.localStorage.getItem("token");
    const navigate = useNavigate();
    const { id } = useParams();
    const [stickynote, setStickynote] = useState();

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}sticky-note/${id}/`)
        .then((results) => {
            console.log("results",results);    
        return results.json();
        })
        
        .then((data) => {
            setStickynote(data);
            console.log("id-stickynote",id.stickynote);
            console.log("data",data);
        });
        console.log("SNonly", stickynote);
        // console.log("prjid2", project.id);
      
        }, [id]);
    
        
        if (!stickynote) {
            return <h3>Loading..</h3>;
        }


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
        try {
          const res = await fetch(`${process.env.REACT_APP_API_URL}sticky-note/${stickynote.id}/`, {
            method: "put",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Token ${token}`,
            },
            body: JSON.stringify({
              win_comment: stickynote.win_comment,
              is_approved: false,
              is_archived: false,
    
            }),
          });
          const data = await res.json();
          console.log(data);
          
          navigate(`/win-wall/${stickynote.win_wall_id}/`); 
        } catch (err) {
          console.log(err);
        }
      };
    
      if (!token || token===null || token===undefined || token==="undefined"){
        return (
          <Link to="/login">Please log in to create and edit your Sticky Notes</Link>
        );
      }
    
      return ( 
        <div>
          <h3>Update Your Win Comment</h3>
            <form className="sticky-note">
                <textarea
        
                id="win_comment"
                value={stickynote.win_comment}
                onChange={handleChange}
            />
         
        
         
            </form>
            <div >
                <p>{stickynote.is_win_comment_valid ? '' : stickynote.error_message}</p>
            </div>
                <button type="submit" onClick={handleSubmit} className="all-btn">
                    Update StickyNote
                </button>
            
            <Link to={`/win-wall/${stickynote.win_wall_id}/`}>
            <button className="all-btn">
                View Win Wall
            </button>
            </Link>
       
        </div>
      );
    }
    
    export default EditStickyNoteForm;
    
       