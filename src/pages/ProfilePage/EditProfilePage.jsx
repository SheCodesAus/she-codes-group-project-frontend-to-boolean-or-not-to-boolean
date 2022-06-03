import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

//Components
import EditProfileForm from "../../components/EditProfileForm/EditProfileForm";

function EditProfilePage(){
    // State
    const [userData, setUserData] = useState();

    //Hooks
    const { id } = useParams();
    const navigate = useNavigate();

    const SuperUser = window.localStorage.getItem("is_superuser");
    const Admin = window.localStorage.getItem("is_shecodes_admin");
    const UserId = window.localStorage.getItem("id");
   
    const IsAdmin = (Admin == 'true');
    const IsSuperUser = (SuperUser == 'true');
    const IsLoggedInUser = (UserId === id);

    // Life changing: INSTANTLY navigate away if not one of these:
    if (!IsAdmin && !IsSuperUser && !IsLoggedInUser) {
        navigate(`/profile/${id}`);
    }

    // Network in use effect
    useEffect(() => {

        // fetch user info
        fetch(`${process.env.REACT_APP_API_URL}users/${id}`)
        .then((results) => {
            return results.json();
        })
        .then((user) => {
        setUserData(user);
        });
    }, []);

    if (!userData) {
        return <h1>Loading...</h1>
    }


    return (
        <>
        <div className="edit-act-container">
            <div id="editprofile-form">
                <h1>Edit Your Your Profile</h1>
            </div>
            <EditProfileForm user={userData} />
        </div>
        </>
    );
}

export default EditProfilePage;