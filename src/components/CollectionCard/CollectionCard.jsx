import React from "react";
import { Link } from "react-router-dom";
import "./CollectionCard.css";

function CollectionCard(props) {
  
    const { collectionData } = props;
  
    return (
    <div className="collection-card">
      <Link to={`/collection/${collectionData.id}`}>
        <img src={collectionData.image} />
        <h3>{collectionData.title}</h3>
      </Link>
    </div>
  );
}

export default CollectionCard;
