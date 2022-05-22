import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


function CollectionPage() {
    
    const [CollectionData, setCollectionData] = useState();
    const { id } = useParams();
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}collection/${id}/`)
        .then((results) => {
        return results.json();
         })
            .then((data) => {
         setWinwallData(data);

         });

    }, []);


     if (!CollectionData) {
         return <h3>Loading..</h3>;
     }

    return (
        <div>
        <div>
            <h1>Collection Title:  {CollectionData.title} </h1>
            <img src={CollectionData.image} alt="collection cover image" />

        </div>
        {/* adding all collection tiles */}

        </div>
    )
    
}   

export default CollectionPage;