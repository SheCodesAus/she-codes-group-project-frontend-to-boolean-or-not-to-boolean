import React, { useState } from "react";

// Imports
import { useNavigate } from "react-router-dom";

function ChangeUserToAdminForm({user}) {
  // State
    const [editAuthLevel, setAuthLevel] = useState(user);

    console.log("------>", editAuthLevel)

    // Actions
    const handleChange = (event) => {
        const { id, checked } = event.target;
        setAuthLevel((prevAuthLevel) => ({
            ...prevAuthLevel,
            [id]: checked,
        }));
    };

    const navigate = useNavigate();

    const handleSubmit = async(event) => {
        event.preventDefault();
        const token = window.localStorage.getItem("token");
        if (!token)return;

        const updatedUserAuth = {}
        if (user.is_shecodes_admin !== editAuthLevel.is_shecodes_admin) {updatedUserAuth.is_shecodes_admin = editAuthLevel.is_shecodes_admin}
        if (user.is_approver !== editAuthLevel.is_approver) {updatedUserAuth.is_approver = editAuthLevel.is_approver}

        if (Object.keys(updatedUserAuth).length > 0) {
            try {
                const res = await 
                fetch(`${process.env.REACT_APP_API_URL}users/${user.id}/superuser/add-auth-level/`, {
                    method:"put",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Token ${token}`,
                    },
                    body: JSON.stringify({...updatedUserAuth}),
                });
                const data = await res.json()
                console.log(data);
                
                navigate('/auth-assignments/');
                // navigate(`/profile/${user.id}/`);               
            } catch(err) {
                console.log(err);
            }
        }
    }

    return (
        <div className="form">
            <h1>Make User an Admin and Approver</h1>
        <form>

        <h2>{user.username}</h2>

        <div className="form-item">
                <label htmlFor="title">Make She Codes Administrator: </label>
                <input
                    type="checkbox"
                    id="is_shecodes_admin"
                    checked={editAuthLevel.is_shecodes_admin}
                    onChange={handleChange}
                />
            </div>
            <div className="form-item">
                <label htmlFor="description">Also Make Admin an Approver (Recommended): </label>
                <input
                    type="checkbox"
                    id="is_approver"
                    checked={editAuthLevel.is_approver}
                    onChange={handleChange}
                />
            </div>
        <div className="edit-auth-div">
            <button className="edit-auth-button" type="submit" onClick={handleSubmit}>
                Update Permissions
            </button>
        </div>
        </form>
        </div> 
        )
    }


export default ChangeUserToAdminForm;