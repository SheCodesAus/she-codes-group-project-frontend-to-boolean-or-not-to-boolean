import React from "react";
import { Link } from "react-router-dom";
import "./CollectionCard.css";

function CreateCollectionCard() {
    
    return (
    <div className="collection-card">
      <Link to={`/create-coolection/`}>
        {/* <img src={collectionData.image} /> */}
        <h3>+ Create a collection</h3>
      </Link>
    </div>
  );
}

export default CreateCollectionCard;
