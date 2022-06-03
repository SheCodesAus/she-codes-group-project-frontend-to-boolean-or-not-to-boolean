import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import CollectionCard from "../../components/CollectionCard/CollectionCard"
import CreateCollectionCard from "../../components/CollectionCard/CreateCollectionCard"
import "../../components/CollectionCard/CollectionCard.css"

// Styles
import "./CollectionListPage.css"

function CollectionListPage(props) {

    const SuperUser = window.localStorage.getItem("is_superuser");
    const Admin = window.localStorage.getItem("is_shecodes_admin");
   
    const IsAdmin = (Admin == 'true');
    const IsSuperUser = (SuperUser == 'true');
    const assignmentsString = window.localStorage.getItem("assignments");
    const assignments = assignmentsString ? JSON.parse(assignmentsString) : [];
   


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
                <h1>You don't have any collections yet...</h1>
                <CreateCollectionCard />

            
            {/* <Link to={`/create-collection/`}>Create your first collection!</Link> */}
            </div>
            )
    };

    let isAssignedAdmin = false;
    let isAssignedApprover = false;

    for (let index = 0; index < assignments.length; index++) {
        const element = assignments[index];

        const collection_assignment = element.collection_id
        const assigned_admin = element.is_admin

        // created is assigned in case we want to use it later 
        isAssignedAdmin = isAssignedAdmin || (assigned_admin == true && (collection_assignment == collectionList.id ))
        
     }

        // If collection exists, then display them in a list:
        return (
            <div className="collection--list--section">
                <h1>&#123;<span>Collections</span>&#125;</h1>   
                {/* <p className="collection--description">Here are your latest collections of win walls.</p> */}
                
                <div className="card--list">
                    {collectionList.map((collectionData, key) => {
                    return <CollectionCard key={key} collectionData={collectionData} />; })}
                
                    {(IsAdmin || IsSuperUser) &&<CreateCollectionCard />}
                </div>  
        </div>               
        )
        }

export default CollectionListPage;




