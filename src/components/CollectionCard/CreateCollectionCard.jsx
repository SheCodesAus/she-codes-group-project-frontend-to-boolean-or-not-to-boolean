import React from "react";
import { Link } from "react-router-dom";
import "./CollectionCard.css";

function CreateCollectionCard() {
    
    return (
    <div className="collection-card">
      <Link to={`/create-collection/`}>
        <img src="https://www.pacifictrellisfruit.com/wp-content/uploads/2016/04/default-placeholder-300x300.png" />
        <h3>+ Create a collection</h3>
      </Link>
    </div>
  );
}

export default CreateCollectionCard;
