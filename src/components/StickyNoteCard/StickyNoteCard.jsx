import React from "react";
import { Link } from "react-router-dom";
import "./StickyNoteCard.css";

function StickyNoteCard(props) {
    // or ProjectCard({ projectData })
    const { stickynoteData } = props;
    return (
        <div>
        <div className="stickynote-card">
           
        <ul>
            <li>
             <p>{stickynoteData.win_comment}</p> 
            </li>
        </ul>

        </div>
        <div>
        <Link to={`/project/${stickynoteData.id}`}></Link>
        </div>
        </div>
    );
}

export default StickyNoteCard;