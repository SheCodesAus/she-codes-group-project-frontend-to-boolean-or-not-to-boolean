import { Link, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./StickyNoteCard.css";
import Circle from "../images/icons/circle-thumbs-up.png";
import Bin from "../images/icons/remove-circle.png";
import Pencil from "../images/icons/edit-pencil-slant.png";
import Tick from   "../images/icons/sticky-note-tick.png";
import Cross from   "../images/icons/sticky-note-cross.png";
import Tooltip from "../../components/ToolTips/ToolTip";

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
    const assignmentsString = window.localStorage.getItem("assignments");
    const assignments = assignmentsString ? JSON.parse(assignmentsString) : [];
   


    const { stickynoteData, winwallData } = props;
    
    const isGuest = stickynoteData.guest == true
    const isOwner = (UserId == stickynoteData.owner)
    const GetStickyStatus = stickynoteData.sticky_status
    const WallStatus = stickynoteData.win_wall_live
    const WallClosed = WallStatus == "Closed"
    const WallLive = WallStatus == "Live"
    const ApprovedStatus = GetStickyStatus == 'Approved'
    const ArchivedStatus = GetStickyStatus == 'Archived'
    const WinWallCollection = winwallData.collection_id
    const CollectionID = WinWallCollection != null

    

    const handleSubmitApprove = async (event,id) => {
        event.preventDefault();
        try {
          const res = await fetch(`${process.env.REACT_APP_API_URL}admin-sticky-note/${id}/`, {
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
          props.reload()
          
        } catch (err) {
          console.log(err);
        }
      };

      const handleSubmitArchive= async (event,id) => {
        event.preventDefault();
        try {
          const res = await fetch(`${process.env.REACT_APP_API_URL}admin-sticky-note/${id}/`, {
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
          props.reload()
          
          
        } catch (err) {
          console.log(err);
        }
      };


      let isAssignedAdmin = false;
      let isAssignedApprover = false;
 
      for (let index = 0; index < assignments.length; index++) {
          const element = assignments[index];
 
         const collection_assignment = element.collection_id
         const winwall_assignment = element.win_wall_id
         const assigned_approver = element.is_approver
         const assigned_admin = element.is_admin
 
       
         isAssignedAdmin = isAssignedAdmin || (assigned_admin == true && (winwall_assignment == stickynoteData.win_wall_id || collection_assignment == winwallData.collection_id || winwallData.collection_id == null ))
         isAssignedApprover = isAssignedApprover || (assigned_approver == true && (winwall_assignment == stickynoteData.win_wall_id || collection_assignment == winwallData.collection_id || winwallData.collection_id == null ))
      }
      

    if ((isSuperUser || isAdmin || isApprover || isAssignedAdmin || isAssignedApprover) && WallClosed && ApprovedStatus) {
    
    return (
       
        <container className="stickynote-area">
           
    
            <section className="stickynote-card">
             <p>{stickynoteData.win_comment}</p>

             <Tooltip content="   Approved  " direction="top">
            <img src={Tick} className="icon-status" />
            </Tooltip>
            
            <Tooltip content="   Archive  " direction="top">
            <button type="submit" onClick={(e) => handleSubmitArchive(e,stickynoteData.id)} className="icon-button">
                {/* Update StickyNote */}
                <img src={Bin} />
            </button> 
            </Tooltip>
             
            </section>
        
        </container>
    );
    }

    else if  ((isSuperUser || isAdmin || isApprover || isAssignedAdmin || isAssignedApprover) && WallClosed && ArchivedStatus) {
    
        return (
           
            <container className="stickynote-area">
               
        
                <section className="stickynote-card">
                 <p>{stickynoteData.win_comment}</p>
    
                 <Tooltip content="   Archived  " direction="top">
                <img src={Cross} className="icon-status" />
                </Tooltip>
                
                 
                </section>
            
            </container>
        );
        }

        else if ((isSuperUser || isAdmin || isApprover || isAssignedAdmin || isAssignedApprover) && WallClosed && !ArchivedStatus && !ApprovedStatus) {
    
            return (
               
                <container className="stickynote-area">
                   
            
                    <section className="stickynote-card">
                     <p>{stickynoteData.win_comment}</p>
        
                     <Tooltip content="   Approve  " direction="top">
                    <button type="submit" onClick={(e) => handleSubmitApprove(e,stickynoteData.id)} className="icon-button">
                        {/* Update StickyNote */}
                        <img src={Circle} />
                    </button>
                    </Tooltip>

                    <Tooltip content="   Archive  " direction="top">
                    <button type="submit" onClick={(e) => handleSubmitArchive(e,stickynoteData.id)} className="icon-button">
                        {/* Update StickyNote */}
                        <img src={Bin} />
                    </button> 
                    </Tooltip>
                    <Tooltip content="   Edit  " direction="top">
                     <Link to={`/edit-sticky-note/win-wall/${stickynoteData.id}/`}>
                    <button className="icon-button">
                        <img src={Pencil} />
                    </button>
                    </Link>
                    </Tooltip>
                     
                    </section>
                
                </container>
            );
            }

    else if  ((isSuperUser || isAdmin || isApprover || isAssignedAdmin || isAssignedApprover) && WallLive) {

        return (
       
            <container className="stickynote-area">
               
        
                <section className="stickynote-card">
                 <p>{stickynoteData.win_comment}</p>
                </section>
            
            </container>
        );
        }

    else if ((isOwner && !isGuest) && WallLive) {
    
        return (
           
            <container className="stickynote-area">
               
        
                <section className="stickynote-card">
                 <p>{stickynoteData.win_comment}</p> 
    
                 <Tooltip content="   Edit  " direction="top">
                 <Link to={`/edit-sticky-note/win-wall/${stickynoteData.id}/`}>
                    <button className="icon-button">
                        <img src={Pencil} />
                    </button>
                    </Link>
                </Tooltip>
                 
                </section>
        
            </container>
        );
        }

    else if (isOwner && WallClosed) {
    
        return (
               
            <section className="stickynote-area">
                
        
                <container className="stickynote-card">
                    <p>{stickynoteData.win_comment}</p> 
                    
                </container>
        
            </section>
            );
            }

    else {
        return (
       
        <section className="stickynote-area">
           
    
            <container className="stickynote-card">
             <p>{stickynoteData.win_comment}</p> 
       
        </container>
        </section>
    );
    }
}

export default StickyNoteCard;