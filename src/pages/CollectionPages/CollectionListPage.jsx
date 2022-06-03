import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import CollectionCard from "../../components/CollectionCard/CollectionCard"
import CreateCollectionCard from "../../components/CollectionCard/CreateCollectionCard"
import "../../components/CollectionCard/CollectionCard.css"
import "./CollectionListPage.css"

function CollectionListPage(props) {

    const SuperUser = window.localStorage.getItem("is_superuser");
    const Admin = window.localStorage.getItem("is_shecodes_admin");
   
    const IsAdmin = (Admin == 'true');
    const IsSuperUser = (SuperUser == 'true');


//    STATES
    const [collectionList, setCollectionList] = useState([]);

//    HOOKS
    const { id } = useParams();
    

//    ACTIONS & HELPERS
useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}view-collections/`)
    .then((results) => {
    return results.json();
    })
    .then((data) => {
    setCollectionList(data);
 });

}, []);

// If no collection yet, then display this message:
    if (!collectionList) {

        return (
            <div>
                <h1>You don't have any collection yet...</h1>
                <CreateCollectionCard />

            
            {/* <Link to={`/create-collection/`}>Create your first collection!</Link> */}
            </div>
            )
    };

        // If collection exists, then display them in a list:
        return (
            <div className="collection--list--section">
            <h1>Collections</h1>   
            <p className="collection--description">Here are your latest collections of win walls.</p>
                
                <div className="card--list">
                {collectionList.map((collectionData, key) => {
                return <CollectionCard key={key} collectionData={collectionData} />; })}
                
                {(IsAdmin || IsSuperUser) &&<CreateCollectionCard />}
            </div>  
        </div>               
        )
        }

export default CollectionListPage;




