import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Imports
import { Link } from "react-router-dom";
import SuperUserImg from "../../components/images/icons/super-logo.png";
import AdminUserImg from "../../components/images/icons/system-admin.png";
import ApproverImg from "../../components/images/icons/task-completed-2.png";
import WonderWomanImg from "../../components/images/icons/wonder-woman-2.png"

//components
import AsyncCSVUser from "../../components/ExportCSV/ExportCSVUser";
import AsyncCSVStickyNote from "../../components/ExportCSV/ExportCSVStickyNote";

function ProfilePage() {
    // State
    const [userData, setUserData] = useState();

    // Hooks
    const { id } = useParams();

    const SuperUser = window.localStorage.getItem("is_superuser");
    const Admin = window.localStorage.getItem("is_shecodes_admin");
    const UserId = window.localStorage.getItem("id");
   
    const IsAdmin = (Admin == 'true');
    const IsSuperUser = (SuperUser == 'true');
    const IsLoggedInUser = (UserId === id);

    // Actions & Helpers
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}users/${id}`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setUserData(data);
        })
    }, [id]);

    // Loading State
    if (!userData) {
        return <h3>Loading Profile...</h3>;

    }

    // Normal State
    return (
        <div className="user-profile-container">
            <div className="profile-header">
                <h1>{userData.username}'s Page!</h1>
            </div>

            <div className="user-profile-info">
                <ul className="user-input">
                    <li><img className="avatar" src={userData.avatar} alt="profile avatar"/></li>
                    <li className="email"><i className="fa fa-envelope"></i> {userData.email}</li>
                    <li className="website">Follow Me:<br></br>
                        <a href={userData.social_link} target="_blank" rel="noopener noreferrer">
                        </a>                
                    </li>
                </ul>

                <div className="bio-section">
                    <h4 className="about-title">About: </h4>
                    <p className="bio-section">{userData.bio}</p>
                </div>

                <div>
                    <h4>{userData.is_superuser && 
                        <img src={SuperUserImg} alt="super-user"/>}
                    </h4>
                    <h4>{userData.is_shecodes_admin &&                 
                        <img src={AdminUserImg} alt="admin-user"/>}
                    </h4>
                    <h4>{userData.is_approver && 
                        <img src={ApproverImg} alt="approver-user"/>}
                    </h4>
                    <h4><img src={WonderWomanImg} alt="user"/></h4>
                </div>
            </div>

            <div className="edit-button-div">
                {(IsAdmin || IsSuperUser || IsLoggedInUser) &&
                    <button className="edit-profile-button"><Link to="edit-profile">Edit Profile</Link></button>}
                {(IsAdmin || IsSuperUser) &&
                    <button className="update-permission-type"><Link to="/shecodes-user-list/">Update Permissions</Link></button>}
            </div>

            {(IsAdmin || IsSuperUser) &&
                <div>
                    <AsyncCSVStickyNote />
                    <AsyncCSVUser />
                </div>}
        </div>
    );
}

export default ProfilePage;