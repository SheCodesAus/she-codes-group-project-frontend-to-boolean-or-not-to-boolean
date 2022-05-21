import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import StickyNoteForm from "../components/StickyNoteForm/StickyNoteForm";


function CreateStickyPage() {


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
           

        </div>
        <div>
             <StickyNoteForm win_wallId={id}/>
        </div>

        </div>
       
    
    )}
export default CreateStickyPage;