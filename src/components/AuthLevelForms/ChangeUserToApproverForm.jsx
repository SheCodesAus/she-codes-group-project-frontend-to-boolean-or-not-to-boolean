import React, { useState } from "react";

// Imports
import { useNavigate } from "react-router-dom";

function ChangeUserToApproverForm({user}) {
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
        if (user.is_approver !== editAuthLevel.is_approver) updatedUserAuth.is_approver = editAuthLevel.is_approver

        if (Object.keys(updatedUserAuth).length > 0) {
            try {
                const res = await 
                fetch(`${process.env.REACT_APP_API_URL}users/${user.id}/admin-add-approver/`, {
                    method:"put",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Token ${token}`,
                    },
                    body: JSON.stringify({...updatedUserAuth}),
                });
                const data = await res.json()
                console.log(data);

                navigate('/shecodes-user-list/');
                // navigate(`/profile/${user.id}/`);               
            } catch(err) {
                console.log(err);
            }
        }
    }

    return (
        <div className="form">
            <h1>Make Mentor/Volunteer a WinWall Approver</h1>
        <form>
        <div className="form-item">
                <label htmlFor="description">Make Approver: </label>
                <input
                    type="checkbox"
                    id="is_approver"
                    checked={editAuthLevel.is_approver}
                    onChange={handleChange}
                />
            </div>
            <div className="edit-auth-div">
                <button className="edit-auth-button" type="submit" onClick={handleSubmit}>
                    Make Approver
                </button>
            </div>
        </form>
        </div> 
        )
    }

export default ChangeUserToApproverForm;