import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


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
            <h1>Win wall Title:  {WinwallData.title} </h1>
            <img src={WinwallData.image} alt="winwall hero image" />

        </div>
    )
    
}
export default WinWallPage;