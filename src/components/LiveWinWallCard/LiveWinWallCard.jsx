import React from "react";
import { Link } from "react-router-dom";


function WinWallCard(props) {
  
    const { winwallData } = props;
  
    return (

    <div className="winwall-card">
      <Link to={`/win-wall/${winwallData.id}`}>
        <img src={winwallData.image} alt="winwallimage" />
        <h3>{winwallData.title}</h3>
        <h3>{winwallData.is_open}</h3>
        </Link>

    </div>
  );
}

export default WinWallCard;
