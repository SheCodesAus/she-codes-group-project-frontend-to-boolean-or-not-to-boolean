import React from "react";
import { Link } from "react-router-dom";

import Tooltip from "../ToolTips/ToolTip";

// Imports
import SuperUser from "../images/icons/super-logo.png";
import AdminUser from "../images/icons/system-admin.png";
import Approver from "../images/icons/task-completed-2.png";
import WonderWoman from "../images/icons/wonder-woman-2.png";

// Imports

function SheCoderCard( {userData} ) {
    return (
        <div className="shecoder-card">
            <Link to={`/profile/${userData.id}`}>
                <img src={userData.avatar} alt="user avatar"/>
                <h3>{userData.first_name}</h3>
            </Link>
                 <Tooltip content="   Superuser  " direction="right">
                <h4>{userData.is_superuser && 
                    <img src={SuperUser} alt="super-user"/>}
                </h4>
                </Tooltip>
                <Tooltip content="  Admin " direction="right">
                <h4>{userData.is_shecodes_admin &&                 
                    <img src={AdminUser} alt="admin-user"/>}
                </h4>
                </Tooltip>
                <Tooltip content="  Approver " direction="right">
                <h4>{userData.is_approver && 
                    <img src={Approver} alt="approver-user"/>}
                </h4>
                </Tooltip>
                <Tooltip content="  You are Amazing! " direction="right">
                <h4><img src={WonderWoman} alt="user"/></h4>
                </Tooltip>
         </div>
    );
}
    
export default SheCoderCard;