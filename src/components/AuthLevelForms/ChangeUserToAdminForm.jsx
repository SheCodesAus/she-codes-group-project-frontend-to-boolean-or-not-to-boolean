import React, { useState } from "react";

// Imports
import { useNavigate } from "react-router-dom";

function ChangeUserToAdminForm({user}) {
  // State
    const [editAuthLevel, setAuthLevel] = useState(user);


    console.log("------>", editAuthLevel)

    // Actions
    const handleChange = (event) => {
        const { id, value } = event.target;
        setAuthLevel((prevAuthLevel) => ({
            ...prevAuthLevel,
            [id]: value,
        }));
    };

    const navigate = useNavigate();

    const handleSubmit = async(event) => {
        event.preventDefault();
        const token = window.localStorage.getItem("token");
        if (!token)return;

        const updatedUserAuth = {}
        if (user.is_shecodes_admin !== editAuthLevel.is_shecodes_admin) updatedUserAuth.is_shecodes_admin = editAuthLevel.is_shecodes_admin
        if (user.is_approver !== editAuthLevel.is_approver) updatedUserAuth.is_approver = editAuthLevel.is_approver

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

                navigate(`/profile/${user.id}/`);               
            } catch(err) {
                console.log(err);
            }
        }
    }

    const formFields = [
        {
           id: "is_shecodes_admin",
           label: "Make She Codes Administrator: ",
           placeholder: "Tick if Admin Rights Required",
           type: "checkbox",
        },
        {
            id: "is_approver",
            label: "Also Make Admin an Approver (Recommended): ",
            placeholder: "Tick if Also Approver",
            type: "checkbox",
         },
    ]

    return (
        <div className="form">
            <h1>Make User an Admin and Approver</h1>
        <form>
            {formFields.map((field, key) => {
                    return (
                    <div key={`${key}-${field.id}`}>
                        <label htmlFor={field.id}>
                            {field.label}
                        </label>
                        <input
                            type={field.type}
                            id={field.id}
                            placeholder={field.placeholder}
                            onChange={handleChange}
                        />
                    </div>
                    )
                })}
        <div className="edit-auth-div">
            <button className="edit-auth-button" type="submit" onClick={handleSubmit}>
                Make Admin
            </button>
        </div>
        </form>
        </div> 
        )
    }


export default ChangeUserToAdminForm;