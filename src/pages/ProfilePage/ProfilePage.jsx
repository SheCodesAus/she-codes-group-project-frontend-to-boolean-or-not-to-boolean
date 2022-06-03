import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Tooltip from "../../components/ToolTips/ToolTip"

// Imports
import { Link } from "react-router-dom";
import SuperUserImg from "../../components/images/icons/super-logo.png";
import AdminUserImg from "../../components/images/icons/system-admin.png";
import ApproverImg from "../../components/images/icons/task-completed-2.png";
import SheCoderImg from "../../components/images/icons/external-developer-web-development-flaticons-flat-flat-icons.png"

//styles
import "./ProfilePage.css"

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
                <h1>&#123;<span>{userData.username}</span>&#125;'s Page!</h1>
            </div>

            <div className="user-profile-info">
                <ul className="user-input">
                    <li><img className="avatar" src={userData.avatar} alt="profile avatar"/></li>
                    <li className="email"><i className="fa fa-envelope"></i>&#123; {userData.email} &#125;</li>
                    <li className="website">
                        <a href={userData.social_link} target="_blank" rel="noopener noreferrer">
                            Follow Me!
                        </a>                
                    </li>
                </ul>

                <div className="bio-section">
                    <h4 className="about-title">About: </h4>
                    <p className="bio-txt">{userData.bio}</p>
                </div>

                <div className="auth-graphics">
                <Tooltip content="Superuser" direction="bottom">
                    <h4>{userData.is_superuser && 
                        <img src={SuperUserImg} alt="super-user"/>}
                    </h4>
                </Tooltip>
                <Tooltip content="Admin" direction="bottom">
                    <h4>{userData.is_shecodes_admin &&                 
                        <img src={AdminUserImg} alt="admin-user"/>}
                    </h4>
                </Tooltip>
                <Tooltip content="Approver" direction="bottom">
                    <h4>{userData.is_approver && 
                        <img src={ApproverImg} alt="approver-user"/>}
                    </h4>
                </Tooltip>
                <Tooltip content="Amazing She Coder!" direction="bottom">
                    <h4><img src={SheCoderImg} alt="user"/></h4>
                </Tooltip>
                </div>
            </div>

            <div className="edit-button-div">
                {(IsAdmin || IsSuperUser || IsLoggedInUser) &&
                    <button className="edit-profile-button"><Link to="edit-profile">Edit Profile</Link></button>}
                {(IsAdmin || IsSuperUser) &&
                    <button className="view-users-list"><Link to="/shecodes-user-list/">View Users</Link></button>}
            </div>
            

            {(IsSuperUser) &&
                <section className="export-data">
                    <h3>Export data as a csv file</h3>
                    <container>
                        <AsyncCSVStickyNote />

                    </container>
                    <container>
                        <AsyncCSVUser />         
                    </container>
                </section>}
        </div>
    );
}

export default ProfilePage;