import React from "react";
import { Link } from "react-router-dom";
import EditCollectionForm from "../EditCollectionForm/EditCollectionForm";
import "./CollectionCard.css";

function CollectionCard(props) {
  
    const { collectionData } = props;
  
    return (
    <div className="card">
        <Link to={`/collection/${collectionData.id}/`}>
        <h3 className="card--title">{collectionData.title}</h3>
        <img src={collectionData.image} />
        </Link>
        <button><Link to={`/collection/${collectionData.id}/`}>View collection</Link></button>
        <button><Link to={`/collection/${collectionData.id}/edit`}>Edit collection</Link></button>

    </div>
  );
}

export default CollectionCard;
