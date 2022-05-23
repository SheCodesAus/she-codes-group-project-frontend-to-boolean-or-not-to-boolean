import React from "react";
import { Link } from "react-router-dom";
import "./WinWallCard.css";

function WinWallCard(props) {
  
    const { winwallData } = props;
  
    return (
    <div className="winwall-card">
      <Link to={`/win-wall/${winwallData.id}`}>
        <img src={winwallData.image} />
        <h3>{winwallData.title}</h3>
      </Link>
    </div>
  );
}

export default WinWallCard;
