// A page ONLY to be accessed by the SuperUser

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// Components
import ChangeUserToApproverForm from "../../components/AuthLevelForms/ChangeUserToApproverForm";

function ChangeUserToApproverPage() {

    // Navigation Links
    const navigate = useNavigate();

    // Auth Checks
    const SuperUser = window.localStorage.getItem("is_superuser");
    const Admin = window.localStorage.getItem("is_shecodes_admin");
   
    const IsAdmin = (Admin == 'true');
    const IsSuperUser = (SuperUser == 'true');

    if (!IsAdmin && !IsSuperUser) {
        navigate(`/shecodes-user-list/`);
    }

    // State
    const [userData, setUserData] = useState();

    //Hooks
    const { id } = useParams();

    // Network in use Effect
    useEffect(() => {

        // Fetch User Info
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


    return <ChangeUserToApproverForm user={userData}/>;
}

export default ChangeUserToApproverPage;