import React from "react";
import { Link, useParams } from "react-router-dom";
import "./StickyNoteCard.css";
import Circle from "../images/icons/circle-thumbs-up.png";
import Bin from "../images/icons/remove-circle.png";
import Pencil from "../images/icons/edit-pencil-slant.png";

function StickyNoteCard(props) {
    // or ProjectCard({ projectData })
    const token = window.localStorage.getItem("token");
    const UserId = window.localStorage.getItem("id");
    const SuperUser = window.localStorage.getItem("is_superuser");
    const Admin = window.localStorage.getItem("is_shecodes_admin");
    const Approver = window.localStorage.getItem("is_approver");
   
    const isAdmin = (Admin == 'true')
    const isApprover = (Approver == 'true')
    const isSuperUser = (SuperUser == 'true')
    
    // const { id } = useParams();
    const { stickynoteData } = props;
    const isOwner = (UserId == stickynoteData.owner)

    const handleSubmitApprove = async (event) => {
        event.preventDefault();
        try {
          const res = await fetch(`${process.env.REACT_APP_API_URL}sticky-note/${stickynoteData.id}/`, {
            method: "put",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Token ${token}`,
            },
            body: JSON.stringify({
              is_approved: true,
              
    
            }),
          });
          const data = await res.json();
          console.log(data);
          
          
        } catch (err) {
          console.log(err);
        }
      };

      const handleSubmitArchive= async (event) => {
        event.preventDefault();
        try {
          const res = await fetch(`${process.env.REACT_APP_API_URL}sticky-note/${stickynoteData.id}/`, {
            method: "put",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Token ${token}`,
            },
            body: JSON.stringify({
              is_archived: true,
              
    
            }),
          });
          const data = await res.json();
          console.log(data);
          
          
        } catch (err) {
          console.log(err);
        }
      };

    if (isSuperUser || isAdmin || isApprover) {
    
    return (
       
        <div className="stickynote-area">
           
    
            <div className="stickynote-card">
             <p>{stickynoteData.win_comment}</p>

            <button type="submit" onClick={handleSubmitApprove} className="icon-button">
                {/* Update StickyNote */}
                <img src={Circle} />
            </button>
            <button type="submit" onClick={handleSubmitArchive} className="icon-button">
                {/* Update StickyNote */}
                <img src={Bin} />
            </button> 

             <Link to={`/edit-sticky-note/win-wall/${stickynoteData.id}/`}>
            <button className="icon-button">
                <img src={Pencil} />
            </button>
            </Link>
             
            
            
        
            </div>
        

       
        <div>
        </div>
        </div>
    );
    }
    else if (isOwner) {
    
        return (
           
            <div className="stickynote-area">
               
        
                <div className="stickynote-card">
                 <p>{stickynoteData.win_comment}</p> 
    
                 <Link to={`/edit-sticky-note/win-wall/${stickynoteData.id}/`}>
                <button className="icon-button">
                    <img src={Pencil} />
                </button>
                </Link>
                 
                </div>
            
    
           
            <div>
            </div>
            </div>
        );
        }

    else {
        return (
       
        <div className="stickynote-area">
           
    
            <div className="stickynote-card">
             <p>{stickynoteData.win_comment}</p> 
       
        </div>
        </div>
    );
    }
}

export default StickyNoteCard;