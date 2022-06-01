import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import EditCollectionForm from "../../components/EditCollectionForm/EditCollectionForm"
import "../../pages/WinWallPage.css"


function EditCollectionPage() {

    const [collectionData, setCollectionData] = useState();
    const { id } = useParams();

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

    return (
    
        <div className="main-section">
            <h1>Collection: "{collectionData.title}" </h1>
            <p className="main-section--description">Edit the information for this collection page.</p>

       <EditCollectionForm />
        </div>
    );
}

export default EditCollectionPage;