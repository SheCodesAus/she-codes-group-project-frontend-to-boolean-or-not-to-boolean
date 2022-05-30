import React from "react";
import { Link } from "react-router-dom";
// import "./WinWallCard.css";
import "../../components/CollectionCard/CollectionCard.css"


function WinWallCard(props) {
  
    const { winwallData } = props;
  
    return (
    <div className="card">
        <Link to={`/win-wall/${winwallData.id}`}>
        <h3 className="card--title">{winwallData.title}</h3>
        <img src={winwallData.image} />
        </Link>
        <button><Link to={`/win-wall/${winwallData.id}/`}>View win wall</Link></button>
        <button><Link to={`/win-wall/${winwallData.id}/edit`}>Edit win wall</Link></button>

    </div>
  );
}

export default WinWallCard;
