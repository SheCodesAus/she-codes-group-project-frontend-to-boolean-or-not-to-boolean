import { upload } from "@testing-library/user-event/dist/upload";
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import StickyNoteCard from "../components/StickyNoteCard/StickyNoteCard";
import "./WinWallPage.css";
import Circle from "../components/images/icons/circle-thumbs-up.png";
import Bin from "../components/images/icons/remove-circle.png";
import Comment from "../components/images/icons/comments.png";


function WinWallPage() {

    const token = window.localStorage.getItem("token");
    const SuperUser = window.localStorage.getItem("is_superuser");
    const Admin = window.localStorage.getItem("is_shecodes_admin");
    const Approver = window.localStorage.getItem("is_approver");
   
    const isAdmin = (Admin == 'true')
    const isApprover = (Approver == 'true')
    const isSuperUser = (SuperUser == 'true')

    const assignmentsString = window.localStorage.getItem("assignments");
    const assignments = assignmentsString ? JSON.parse(assignmentsString) : [];
   
    

    const [WinwallData, setWinwallData] = useState();
   
    const { id } = useParams();
    const reload  = () => {
        fetch(`${process.env.REACT_APP_API_URL}win-wall/${id}/`)
        .then((results) => {
        return results.json();
         })
            .then((data) => {
         setWinwallData(data);
         console.log("data", data);
         });}

    useEffect(() => {
        reload()

    }, []);

   


     if (!WinwallData) {
         return <h3>Loading..</h3>;
     }

     let isAssignedAdmin = false;
     let isAssignedApprover = false;

     for (let index = 0; index < assignments.length; index++) {
         const element = assignments[index];

        const collection_assignment = element.collection_id
        const winwall_assignment = element.win_wall_id
        const assigned_approver = element.is_approver
        const assigned_admin = element.is_admin

        isAssignedAdmin = isAssignedAdmin || (assigned_admin == true && (winwall_assignment == WinwallData.id || collection_assignment == WinwallData.collection_id ))
        isAssignedApprover = isAssignedApprover || (assigned_approver == true && (winwall_assignment == WinwallData.id || collection_assignment == WinwallData.collection_id ))
     }
     

     const WallStatus = WinwallData.is_open
     const WallClosed = WallStatus == false
     const WallLive = WallStatus == true

    //  const handleChange = (event) => {
    //     const { id, value } = event.target;
    //     setWinwallData((prevWinwallData) => ({
    //       ...prevWinwallData,
    //       [id]: value,
    //     }));
    //   };

     const handleSubmitApprove = async (event) => {
        event.preventDefault();
        try {
          const res = await fetch(`${process.env.REACT_APP_API_URL}win-wall-notes/${id}/`, {
            method: "put",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Token ${token}`,
            },
            body: JSON.stringify({
                bulk_approve: true,
              
    
            }),
          });
          const data = await res.json();
          console.log(data);
          reload()
          
        } catch (err) {
          console.log(err);
        }
      };

      const handleSubmitArchive = async (event) => {
        event.preventDefault();
        try {
          const res = await fetch(`${process.env.REACT_APP_API_URL}win-wall-notes/${id}/`, {
            method: "put",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Token ${token}`,
            },
            body: JSON.stringify({
                bulk_archive: true,
              
    
            }),
          });
          const data = await res.json();
          console.log(data);
          reload()
          
          
        } catch (err) {
          console.log(err);
        }
      };
    
    if ((isSuperUser || isAdmin || isApprover || isAssignedAdmin || isAssignedApprover) && WallClosed) {


    return (
        <div>
        <div>
            <h1>Win wall Title:  {WinwallData.title} </h1>
            <h2>Win wall Status: Closed </h2>
            <img src={WinwallData.image} alt="winwall hero image" />

        </div>
        {/* adding sticky notes to winwall page */}

        <div className="sticky-section">
        <h3>StickyNotes</h3>
        <div className="sticky-board">
      
    
            {WinwallData.stickynotes.map((stickynoteData, key) => {
                return <StickyNoteCard key={key} stickynoteData={stickynoteData} winwallData={WinwallData}
            />;
            })}
    
        </div>
        </div>
        <div>
           
            <button type="submit" onClick={handleSubmitApprove} className="icon-button">
                {/* Update StickyNote */}
                <img src={Circle} />
            </button>
            <button type="submit" onClick={handleSubmitArchive} className="icon-button">
                {/* Update StickyNote */}
                <img src={Bin} />
            </button>
        </div>
        </div>
    );
        }

    else if  ((isSuperUser || isAdmin || isApprover || isAssignedAdmin || isAssignedApprover) && WallLive) {


            return (
                <div>
                <div>
                    <h1>Win wall Title:  {WinwallData.title} </h1>
                    <h2>Win wall Status: Live </h2>
                    <img src={WinwallData.image} alt="winwall hero image" />
        
                </div>
                {/* adding sticky notes to winwall page */}
        
                <div className="sticky-section">
                <h3>StickyNotes</h3>
                <div className="sticky-board">
              
            
                {WinwallData.stickynotes.map((stickynoteData, key) => {
                return <StickyNoteCard key={key} stickynoteData={stickynoteData} winwallData={WinwallData}
                    />;
                    })}
            
                </div>
                </div>
                <div>
                    <Link to={`/create-sticky-note/win-wall/${WinwallData.id}/`}>
                    <button className="icon-button">
                    <img src={Comment} />
                    </button>
                    </Link>
                
                </div>
                </div>
            );
                }

     else if  ((!isSuperUser && !isAdmin && !isApprover && !isAssignedAdmin && !isAssignedApprover) && WallClosed) {


            return (
                <div>
                <div>
                    <h1>Win wall Title:  {WinwallData.title} </h1>
                    <h2>Win wall Status: Closed </h2>
                    <img src={WinwallData.image} alt="winwall hero image" />
        
                </div>
                {/* adding sticky notes to winwall page */}
        
                <div className="sticky-section">
                <h3>StickyNotes</h3>
                <div className="sticky-board">
              
            
                {WinwallData.stickynotes.map((stickynoteData, key) => {
                return <StickyNoteCard key={key} stickynoteData={stickynoteData} winwallData={WinwallData}
                    />;
                    })}
            
                </div>
                </div>
              
                </div>
            );
                }
     else if  ((!isSuperUser && !isAdmin && !isApprover && !isAssignedAdmin && !isAssignedApprover) && WallLive) {


            return (
                <div>
                <div>
                    <h1>Win wall Title:  {WinwallData.title} </h1>
                    <h2>Win wall Status: Live </h2>
                    <img src={WinwallData.image} alt="winwall hero image" />
        
                </div>
                {/* adding sticky notes to winwall page */}
        
                <div className="sticky-section">
                <h3>StickyNotes</h3>
                <div className="sticky-board">
                
            
                {WinwallData.stickynotes.map((stickynoteData, key) => {
                return <StickyNoteCard key={key} stickynoteData={stickynoteData} winwallData={WinwallData}
                    />;
                    })}
            
                </div>
                </div>
                <div>
                    <Link to={`/create-sticky-note/win-wall/${WinwallData.id}/`}>
                    <button className="icon-button">
                    <img src={Comment} />
                    </button>
                    </Link>
                
                </div>
                </div>
            );
                }
    else {
        return (
            <div>
            <div>
                <h1>Win wall Title:  {WinwallData.title} </h1>
                <h2>Win wall Status: .. </h2>


                <img src={WinwallData.image} alt="winwall hero image" />
    
            </div>
            {/* adding sticky notes to winwall page */}
    
            <div className="sticky-section">
            <h3>StickyNotes</h3>
            <div className="sticky-board">
          
        
                {WinwallData.stickynotes.map((stickynoteData, key) => {
                return <StickyNoteCard key={key} stickynoteData={stickynoteData} winwallData={WinwallData}
                />;
                })}
        
            </div>
            </div>
        
            </div>
        );
            }

}
export default WinWallPage;