import React from "react";
import { Link } from "react-router-dom";
import "./StickyNoteCard.css";

function StickyNoteCard(props) {
    // or ProjectCard({ projectData })
    const { stickynoteData } = props;
    return (
       
        <div className="stickynote-area">
           
    
            <div className="stickynote-card">
             <p>{stickynoteData.win_comment}</p> 
            </div>
        

       
        <div>
        <Link to={`/project/${stickynoteData.id}`}></Link>
        </div>
        </div>
    );
}

export default StickyNoteCard;