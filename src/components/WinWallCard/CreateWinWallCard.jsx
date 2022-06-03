import React from "react";
import { Link } from "react-router-dom";
import "./WinWallCard.css";
import "../CollectionCard/CollectionCard.css"

function CreateWinWallCard({ collectionId }) {

  const SuperUser = window.localStorage.getItem("is_superuser");
  const Admin = window.localStorage.getItem("is_shecodes_admin");
 
  const IsAdmin = (Admin == 'true');
  const IsSuperUser = (SuperUser == 'true');

  if (IsAdmin || IsSuperUser) {
    
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
