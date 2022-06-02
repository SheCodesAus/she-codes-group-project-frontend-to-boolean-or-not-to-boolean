import React from "react";
import { Link } from "react-router-dom";

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
                <h4>{userData.is_superuser && 
                    <img src={SuperUser} alt="super-user"/>}
                </h4>
                <h4>{userData.is_shecodes_admin &&                 
                    <img src={AdminUser} alt="admin-user"/>}
                </h4>
                <h4>{userData.is_approver && 
                    <img src={Approver} alt="approver-user"/>}
                </h4>
                <h4><img src={WonderWoman} alt="user"/></h4>
         </div>
    );
}
    
export default SheCoderCard;