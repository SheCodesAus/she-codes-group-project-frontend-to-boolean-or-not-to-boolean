import React from "react";
import { Link } from "react-router-dom";
import "./WinWallCard.css";

function CreateWinWallCard() {
    
    return (
    <div className="winwall-card">
      <Link to={`/create-win-wall/`}>
        <img src="https://www.pacifictrellisfruit.com/wp-content/uploads/2016/04/default-placeholder-300x300.png" />
        <h3>+ Create a win wall</h3>
      </Link>
    </div>
  );
}

export default CreateWinWallCard;
