import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import EditWinWallForm from "../components/EditWinWallForm/EditWinWallForm"

function EditWinWallPage() {

    const [winwallData, setWinwallData] = useState();
    const { id } = useParams();

    useEffect(() => {

        // fetch winwall info
        fetch(`${process.env.REACT_APP_API_URL}win-wall/${id}/`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
        setWinwallData(data);
        });
    }, []);

    if (!winwallData) {
        return <h1>Loading...</h1>
    }

    return (
    
        <div>
        <h1>Edit win wall info</h1>
       <EditWinWallForm />
        </div>
    );
}

export default EditWinWallPage;