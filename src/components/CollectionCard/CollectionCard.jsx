import React from "react";
import { Link } from "react-router-dom";
import "./CollectionCard.css";

function CollectionCard(props) {
  
    const { collectionData } = props;

    const SuperUser = window.localStorage.getItem("is_superuser");
    const Admin = window.localStorage.getItem("is_shecodes_admin");
   
    const IsAdmin = (Admin == 'true');
    const IsSuperUser = (SuperUser == 'true');
  
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
