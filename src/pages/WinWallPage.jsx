import { upload } from "@testing-library/user-event/dist/upload";
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import StickyNoteCard from "../components/StickyNoteCard/StickyNoteCard";
import "./WinWallPage.css";
import Circle from "../components/images/icons/circle-thumbs-up.png";
import Bin from "../components/images/icons/remove-circle.png";


function WinWallPage() {

    const token = window.localStorage.getItem("token");
    const SuperUser = window.localStorage.getItem("is_superuser");
    const Admin = window.localStorage.getItem("is_shecodes_admin");
    const Approver = window.localStorage.getItem("is_approver");
   
    const isAdmin = (Admin == 'true')
    const isApprover = (Approver == 'true')
    const isSuperUser = (SuperUser == 'true')

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
        //  console.log("title", title);
         });

    }, []);


     if (!WinwallData) {
         return <h3>Loading..</h3>;
     }

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
              is_approved: true,
              
    
            }),
          });
          const data = await res.json();
          console.log(data);
          
          
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
        <div>
        <div>
            <h1>Win wall Title:  {WinwallData.title} </h1>
            <img src={WinwallData.image} alt="winwall hero image" />

        </div>
        {/* adding sticky notes to winwall page */}

        <div className="sticky-section">
        <h3>StickyNotes</h3>
        <div className="sticky-board">
      
    
            {WinwallData.stickynotes.map((stickynoteData, key) => {
            return <StickyNoteCard key={key} stickynoteData={stickynoteData} 
            />;
            })}
    
        </div>
        </div>
        <div>
            <Link to={`/create-sticky-note/win-wall/${WinwallData.id}/`}>
            <button className="all-btn">
                Post Win Comment
            </button>
            </Link>
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
    else {
        return (
            <div>
            <div>
                <h1>Win wall Title:  {WinwallData.title} </h1>
                <img src={WinwallData.image} alt="winwall hero image" />
    
            </div>
            {/* adding sticky notes to winwall page */}
    
            <div className="sticky-section">
            <h3>StickyNotes</h3>
            <div className="sticky-board">
          
        
                {WinwallData.stickynotes.map((stickynoteData, key) => {
                return <StickyNoteCard key={key} stickynoteData={stickynoteData} 
                />;
                })}
        
            </div>
            </div>
            <Link to={`/create-sticky-note/win-wall/${WinwallData.id}/`}>
            <button className="all-btn">
                Post Win Comment
            </button>
            </Link>
            </div>
        );
            }

}
export default WinWallPage;