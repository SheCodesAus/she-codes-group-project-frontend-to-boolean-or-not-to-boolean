import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// Imports
import EditCollectionForm from "../../components/EditCollectionForm/EditCollectionForm"
import "../../pages/WinWallPage.css"


function EditCollectionPage() {

    const SuperUser = window.localStorage.getItem("is_superuser");
    const Admin = window.localStorage.getItem("is_shecodes_admin");
    const Approver = window.localStorage.getItem("is_approver");
   
    const isAdmin = (Admin == 'true')
    const isApprover = (Approver == 'true')
    const isSuperUser = (SuperUser == 'true')

    const assignmentsString = window.localStorage.getItem("assignments");
    const assignments = assignmentsString ? JSON.parse(assignmentsString) : [];
   

    const [collectionData, setCollectionData] = useState();
    
    const { id } = useParams();

    const navigate = useNavigate();

    // Life changing: INSTANTLY navigate away if not one of these:
    

    useEffect(() => {
        // fetch collection info
        fetch(`${process.env.REACT_APP_API_URL}collection/${id}/`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
        setCollectionData(data);
        });
    }, []);



    if (!collectionData) {
        return <h1>Loading...</h1>
    }

    // created assignedadmin access in case we want to give them edit access in future 

    let isAssignedAdmin = false;
    
 
      for (let index = 0; index < assignments.length; index++) {
        const element = assignments[index];
 
        const collection_assignment = element.collection_id
        const assigned_admin = element.is_admin
 
       
        isAssignedAdmin = isAssignedAdmin || (assigned_admin == true && (collection_assignment == collectionData.id))
        
      }

    if (!isAdmin && !isSuperUser) {
        navigate(`/collections/`);
    }

    function DeleteCollection() {
        const token = window.localStorage.getItem("token");
        if (!token)return;
        // Fetch User Info
        fetch(`${process.env.REACT_APP_API_URL}admin-collection/${id}/`, {
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
            <h1>Collection: "{collectionData.title}" </h1>
            <p className="main-section--description">Edit the information for this collection page.</p>

            <EditCollectionForm />

            <button onClick={DeleteCollection}>Delete Collection</button>
        </div>
    );
}

export default EditCollectionPage;