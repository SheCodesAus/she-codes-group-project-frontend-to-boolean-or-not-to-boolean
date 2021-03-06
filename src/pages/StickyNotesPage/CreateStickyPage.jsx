import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import StickyNoteForm from "../../components/StickyNoteForm/StickyNoteForm";

import "../../pages/WinWallPage.css"
import "./CreateSticky.css"

function CreateStickyPage() {

    const token = window.localStorage.getItem("token");
    const isUserLoggedin = !(token === null || token === undefined || token === "undefined")
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

    const WallStatus = WinwallData.is_open;
    const WallClosed = WallStatus == false;
    const WallLive = WallStatus == true;


    if (isUserLoggedin && WallLive) {

    return (
        <section className="main-section">
            <h1 className="create-sticky-text">{WinwallData.title} </h1>
            <p className="main-section--description">Create a new sticky note</p>  
            <div className="sticky-board">
                <StickyNoteForm win_wallId={id}/>
            </div>
            <div className="my-project-card">
                <Link to={`/win-wall/${WinwallData.id}/`}>
                <button className="sticky-note-btn">
                    View Win Wall
                </button>
                </Link>
            </div>
        </section>
       
    
        );
    }

    else if (isUserLoggedin && WallClosed) {

        return (
            <section className="main-section">
            <h1>{WinwallData.title} </h1>
           
    
            <div className="my-project-card">
                <Link to={`/win-wall/${WinwallData.id}/`}>
                <button className="sticky-note-btn">
                    View Win Wall
                </button>
                </Link>
                
    
            </div>
    
            </section>
           
        
            );
        }

    else if  (!isUserLoggedin && WallLive) {

            return (
                <section>
                <div>
                    <h1>Win wall Title:  {WinwallData.title} </h1>
                   
        
                </div>
                <div>
                     <StickyNoteForm win_wallId={id}/>
                </div>
                <div className="my-project-card">
                    <Link to={`/win-wall/${WinwallData.id}/`}>
                    <button className="sticky-note-btn">
                        View Win Wall
                    </button>
                    </Link>
                    <Link to={`/sign-up/`}>
                    <button className="sticky-note-btn">
                        Register
                    </button>
                    </Link>
        
                </div>
        
                </section>
               
            
                );
            }

    else if  (!isUserLoggedin && WallClosed) {
        return (
            <section>
            <div>
                <h1>Win wall Title:  {WinwallData.title} </h1>
               
    
            </div>
            <div>
                 <StickyNoteForm win_wallId={id}/>
            </div>
            <div className="my-project-card">
                <Link to={`/win-wall/${WinwallData.id}/`}>
                <button className="sticky-note-btn">
                    View Win Wall
                </button>
                </Link>
                <Link to={`/sign-up/`}>
                <button className="sticky-note-btn">
                    Register
                </button>
                </Link>
    
            </div>
    
            </section>
           
        
            );
    }
}
export default CreateStickyPage;