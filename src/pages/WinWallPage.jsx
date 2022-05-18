import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


function WinWallPage() {


    const [winwallData, setWinwallData] = useState({ allWinWalls: [] });
    const { id } = useParams();
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}win-wall/${id}/`)
        // fetch(`http://127.0.0.1:8000/win-wall/${id}/`)
        .then((results) => {
        return results.json();
         })
            .then((data) => {
         setWinwallData(data);
         });
    }, []);


    return (
        <div>
        <h1>This is a palceholder for "win wall name" {winwallData.name}</h1>
        </div>
    )
    
}
export default WinWallPage;