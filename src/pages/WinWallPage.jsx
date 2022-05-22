import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import StickyNoteCard from "../components/StickyNoteCard/StickyNoteCard";


function WinWallPage() {


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

    return (
        <div>
        <div>
            <h1>Win wall Title:  {WinwallData.title} </h1>
            <img src={WinwallData.image} alt="winwall hero image" />

        </div>
        {/* adding sticky notes to winwall page */}

        <div>
        <h3>StickyNotes</h3>
            <div>
            {WinwallData.stickynotes.map((stickynoteData, key) => {
            return <StickyNoteCard key={key} stickynoteData={stickynoteData} 
            />;
            })}
            </div>
        </div>
        </div>
    )
    
}
export default WinWallPage;