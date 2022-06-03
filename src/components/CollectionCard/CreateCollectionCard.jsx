import React from "react";
import { Link } from "react-router-dom";
import "./CollectionCard.css";

function CreateCollectionCard() {
    
    return (
      <div className="card">
        <Link to={`/create-collection/`}>
        <h3 className="card--title">Your New Collection</h3>
        <img src="https://www.pacifictrellisfruit.com/wp-content/uploads/2016/04/default-placeholder-300x300.png" alt="collection-img"/>
        </Link>
        <button><Link to={`/create-collection/`}>+ Create collection</Link></button>
      

    </div>
  );
}

export default CreateCollectionCard;
