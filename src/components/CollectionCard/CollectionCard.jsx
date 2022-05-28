import React from "react";
import { Link } from "react-router-dom";
import EditCollectionForm from "../EditCollectionForm/EditCollectionForm";
import "./CollectionCard.css";

function CollectionCard(props) {
  
    const { collectionData } = props;
  
    return (
    <div className="collection-card">
      <Link to={`/collection/${collectionData.id}`}>
        <img src={collectionData.image} />
          <h3>{collectionData.title}</h3>
        </Link>
        <button><Link to={`/collection/${collectionData.id}/edit`}>Edit collection</Link></button>
    </div>
  );
}

export default CollectionCard;
