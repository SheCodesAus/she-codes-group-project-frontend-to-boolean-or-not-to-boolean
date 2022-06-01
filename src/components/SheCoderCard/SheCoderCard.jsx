import React from "react";
import { Link } from "react-router-dom";

// Components

function SheCoderCard( {userData} ) {
    return (
        <div className="shecoder-card">
            <Link to={`/profile/${userData.id}`}>
                <img src={userData.avatar} alt="user avatar"/>
                <h3>{userData.first_name}</h3>
            </Link>
                <h4>{userData.is_shecodes_admin}</h4>
                <h4>{userData.is_approver}</h4>
         </div>
    );
}
    
export default SheCoderCard;