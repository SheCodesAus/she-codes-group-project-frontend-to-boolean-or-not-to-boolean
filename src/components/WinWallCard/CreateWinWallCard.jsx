import React from "react";
import { Link } from "react-router-dom";
import "./WinWallCard.css";
import "../CollectionCard/CollectionCard.css"

function CreateWinWallCard({ collectionId, winwallData }) {

  const SuperUser = window.localStorage.getItem("is_superuser");
  const Admin = window.localStorage.getItem("is_shecodes_admin");
 
  const IsAdmin = (Admin == 'true');
  const IsSuperUser = (SuperUser == 'true');

  const assignmentsString = window.localStorage.getItem("assignments");
  const assignments = assignmentsString ? JSON.parse(assignmentsString) : [];

  

  let isAssignedAdmin = false;
 

  for (let index = 0; index < assignments.length; index++) {
      const element = assignments[index];

      const collection_assignment = element.collection_id
      const assigned_admin = element.is_admin

    
      isAssignedAdmin = isAssignedAdmin || (assigned_admin == true && (collection_assignment == collectionId.id))
  }

  if (IsAdmin || IsSuperUser || isAssignedAdmin) {
    
    return (
    <div className="card">
        <Link to={`/collection/${collectionId}/create-win-wall/`}>
        <h3 className="card--title">Your New Win Wall</h3>
        <img src="https://www.pacifictrellisfruit.com/wp-content/uploads/2016/04/default-placeholder-300x300.png" alt="placeholder-img"/>
        </Link>
        <button><Link to={`/collection/${collectionId}/create-win-wall/`}>+ Create Win Wall</Link></button>

    </div>
  )};
}

export default CreateWinWallCard;
