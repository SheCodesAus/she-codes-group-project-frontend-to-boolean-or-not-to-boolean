import React from "react";
import { Link } from "react-router-dom";

import Tooltip from "../ToolTips/ToolTip";

// Imports
import SuperUser from "../images/icons/super-logo.png";
import AdminUser from "../images/icons/system-admin.png";
import Approver from "../images/icons/task-completed-2.png";
import SheCoder from "../images/icons/external-developer-web-development-flaticons-flat-flat-icons.png";

// Styles
import "./SheCoderCard.css";

function SheCoderCard( {userData} ) {
    return (
        <div className="shecoder-card">
            <Link to={`/profile/${userData.id}`}>
                <img id="avatar" src={userData.avatar} alt="user avatar"/>
                <h3>{userData.first_name}</h3>
            </Link>

            <div className="auth-graphics">
                <Tooltip content="Superuser" direction="bottom">
                <h4>{userData.is_superuser && 
                    <img src={SuperUser} alt="super-user"/>}
                </h4>
                </Tooltip>
                <Tooltip content="Admin" direction="bottom">
                <h4>{userData.is_shecodes_admin &&                 
                    <img src={AdminUser} alt="admin-user"/>}
                </h4>
                </Tooltip>
                <Tooltip content="Approver" direction="bottom">
                <h4>{userData.is_approver && 
                    <img src={Approver} alt="approver-user"/>}
                </h4>
                </Tooltip>
                <Tooltip content="Amazing She Coder!" direction="bottom">
                <h4>
                    <img src={SheCoder} alt="user"/></h4>
                </Tooltip>
            </div>
         </div>
    );
}
    
export default SheCoderCard;