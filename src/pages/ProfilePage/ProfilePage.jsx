import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Imports
import { Link } from "react-router-dom";

//components
import AsyncCSVUser from "../../components/ExportCSV/ExportCSVUser";
import AsyncCSVStickyNote from "../../components/ExportCSV/ExportCSVStickyNote";

function ProfilePage() {
    // State
    const [userData, setUserData] = useState();

    // Hooks
    const { id } = useParams();

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
                            <i className="fa fa-globe"></i>
                        </a>                
                    </li>
                </ul>

                <div className="bio-section">
                    <h4 className="about-title">About: </h4>
                    <p className="bio-section">{userData.bio}</p>
                </div>
            </div>

            <div className="edit-button-div">
                <button className="edit-profile-button"><Link to="edit-profile">Edit Profile</Link></button>
            </div>

            {/* user export CSV to be set for admin? - TBA... */}
            {/* Export user data */}

            {/* Export Sticky note data */}
            <AsyncCSVStickyNote />
            {/* Export User data */}
            <AsyncCSVUser />
            
        </div>
    );
}

export default ProfilePage;