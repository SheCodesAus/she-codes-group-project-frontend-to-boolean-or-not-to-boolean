import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

// Imports
import EditWinWallForm from "../components/EditWinWallForm/EditWinWallForm"
import "./WinWallPage.css"


function EditWinWallPage() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [winwallData, setWinwallData] = useState();

    const SuperUser = window.localStorage.getItem("is_superuser");
    const Admin = window.localStorage.getItem("is_shecodes_admin");
    const Approver = window.localStorage.getItem("is_approver");
   
    const isAdmin = (Admin == 'true')
    const isApprover = (Approver == 'true')
    const isSuperUser = (SuperUser == 'true')

    // INSTANTLY navigate away if not one of these:
    if (!isAdmin && !isApprover && !isSuperUser) {
        navigate(`/collections/`);
    }

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

    function DeleteWinWall() {
        const token = window.localStorage.getItem("token");
        if (!token)return;
        // Fetch Info
        fetch(`${process.env.REACT_APP_API_URL}admin-win-wall/${id}/`, {
            method:"delete",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Token ${token}`,
            }})
            .then(() => {
                navigate(`/collections/`);
            })
        return; 
    }

    return (
        <div className="main-section">
            <h1>Win wall: "{winwallData.title}"</h1>

            <p className="main-section--description">Edit the information for this win wall page.</p>

       <EditWinWallForm />

       <button onClick={DeleteWinWall}>Delete Win Wall</button>
        </div>
    );
}

export default EditWinWallPage;