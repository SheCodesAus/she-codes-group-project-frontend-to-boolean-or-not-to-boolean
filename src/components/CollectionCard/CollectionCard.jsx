import React from "react";
import { Link } from "react-router-dom";
import "./CollectionCard.css";

function CollectionCard(props) {
  
    const { collectionData } = props;

    const SuperUser = window.localStorage.getItem("is_superuser");
    const Admin = window.localStorage.getItem("is_shecodes_admin");
   
    const IsAdmin = (Admin == 'true');
    const IsSuperUser = (SuperUser == 'true');
    const assignmentsString = window.localStorage.getItem("assignments");
    const assignments = assignmentsString ? JSON.parse(assignmentsString) : [];
   
  //  created is assigned admin in case we want to give edit access later 
   
    let isAssignedAdmin = false;
    
 
      for (let index = 0; index < assignments.length; index++) {
        const element = assignments[index];
 
        const collection_assignment = element.collection_id
        const assigned_admin = element.is_admin
 
       
        isAssignedAdmin = isAssignedAdmin || (assigned_admin == true && (collection_assignment == collectionData.id))
        
      }
  
    return (
    <div className="card">
        <Link to={`/collection/${collectionData.id}/`}>
        <h3 className="card--title">{collectionData.title}</h3>
        <img src={collectionData.image} alt="collection-img"/>
        </Link>
        <button><Link to={`/collection/${collectionData.id}/`}>View Collection</Link></button>
        {(IsAdmin || IsSuperUser) &&<button><Link to={`/collection/${collectionData.id}/edit`}>Edit Collection</Link></button>}

    </div>
  );
}

export default CollectionCard;
