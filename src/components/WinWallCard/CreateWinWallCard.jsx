import React from "react";
import { Link } from "react-router-dom";
import "./WinWallCard.css";
import "../CollectionCard/CollectionCard.css"

function CreateWinWallCard({ collectionId }) {
    
    return (
    <div className="card">
        <Link to={`/collection/${collectionId}/create-win-wall/`}>
        <h3 className="card--title">Your new win wall</h3>
        <img src="https://www.pacifictrellisfruit.com/wp-content/uploads/2016/04/default-placeholder-300x300.png" />
        </Link>
        <button><Link to={`/collection/${collectionId}/create-win-wall/`}>+ Create win wall</Link></button>

    </div>
  );
}

export default CreateWinWallCard;
