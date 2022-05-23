import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import CollectionCard from "../components/CollectionCard/CollectionCard"

function CollectionPage(props) {


//    STATES
    const [collectionList, setCollectionList] = useState([]);

//    HOOKS
    const { id } = useParams();
    

//    ACTIONS & HELPERS
useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}collections/`)
    .then((results) => {
    return results.json();
    })
    .then((data) => {
    setCollectionList(data);
 });

}, []);

// If no collection yet, then display this message:
    // const { collectionData } = props
    // if (!collectionData) {
    

    //     return (
    //         <div>
    //         <h1>You don't have any collection yet...</h1>
            
    //         <Link to={`/create-collection/`}>Create your first collection!</Link>
    //         </div>
    //         )
    // };

// If collection exists, then display them in a list:
return (
    <div>
     <h1>Collections</h1>   
    <h2>Here are your latest collections of digital win walls.</h2>
        
    <div className="collection-card--list">
    {collectionList.map((collectionData, key) => {
    return<CollectionCard key={key} collectionData={collectionData}/>;            })}
    </div>
        
</div>               
)
}

export default CollectionPage;

