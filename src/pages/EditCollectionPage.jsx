import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import EditCollectionForm from "../components/EditCollectionForm/EditCollectionForm"

function EditCollectionPage() {

    const [collectionData, setCollectionData] = useState();
    const { id } = useParams();

    useEffect(() => {

        // fetch collection info
        fetch(`${process.env.REACT_APP_API_URL}collection/${id}`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
        setCollectionData(data);
        });
    }, []);


    return (
    
        <div>
        <h1>Edit collection</h1>
       <EditCollectionForm data={collectionData} />
        </div>
    );
}

export default EditCollectionPage;