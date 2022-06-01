import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function UpdateUserAuthListPage() {
    // Navigation Links
    const navigate = useNavigate();

    // State
    const [usernameList, setUsernameList] = useState();
    const [userData, setUserData] = useState();

    const navigateToPersonYouWantToMakeAdmin = () => {
        navigate(`/profile/${userData.id}/add-auth-level/`)
    }

    const navigateToPersonYouWantToMakeApprover = () => {
        navigate(`/profile/${userData.id}/make-approver/`)
    }

    // Network in use Effect
    useEffect(() => {
        const token = window.localStorage.getItem("token");
        if (!token)return;
        // Fetch User Info
        fetch(`${process.env.REACT_APP_API_URL}users/shecodes-user-list/`, {
            method:"get",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Token ${token}`,
            }})
        .then((results) => {
            return results.json();
        })
        .then((user) => {
            setUsernameList(user);
        });
    }, []);

    // Actions & Helpers
    const getUserData = (id) => {
        const token = window.localStorage.getItem("token");
        if (!token)return;
        // Fetch User Info
        fetch(`${process.env.REACT_APP_API_URL}users/${id}/`, {
            method:"get",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Token ${token}`,
        }})
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setUserData(data);
            console.log(data);
            console.log(userData);
        })
    };

    if (!usernameList) {
        return <h1>Loading User List...</h1>
    }
   
   
    console.log("user", userData);

    

    const onSelectedUserChange = (event) => {
        getUserData(event.target.value);
    }


    console.log("user", userData);

    const assignmentsString = userData.assignments;
    const assignments = assignmentsString ? JSON.parse(assignmentsString) : [];
    
    let isAssignedAdmin = false;
    let isAssignedApprover = false;
 
    for (let index = 0; index < assignments.length; index++) {
          const element = assignments[index];

        const collection_assignment = element.collection_id
        const winwall_assignment = element.win_wall_id
        const assigned_approver = element.is_approver
        const assigned_admin = element.is_admin

        isAssignedAdmin = isAssignedAdmin || (assigned_admin == true )
        isAssignedApprover = isAssignedApprover || (assigned_approver == true )
    }

    // const assignmentsString = userData.assignments;
    // const assignments = assignmentsString ? JSON.parse(assignmentsString) : [];
    
    // let isAssignedAdmin = false;
    // let isAssignedApprover = false;
 
    // for (let index = 0; index < assignments.length; index++) {
    //       const element = assignments[index];

    // const collection_assignment = element.collection_id
    // const winwall_assignment = element.win_wall_id
    // const assigned_approver = element.is_approver
    // const assigned_admin = element.is_admin

    // isAssignedAdmin = isAssignedAdmin || (assigned_admin == true )
    // isAssignedApprover = isAssignedApprover || (assigned_approver == true )

    //   }

    return (
    <>
    <div className="username-dropdown">
        <select onChange={onSelectedUserChange}>
            <option value="" disabled selected>Select She Codes User </option>
            {usernameList.map((u) => (
                <option 
                    key={u.id}
                    value={u.id}>{u.username}
                </option>
            ))}
        </select>

        {userData &&
        <ul>
            <li>{userData.username}</li>
            <li>Is {!userData.is_superuser && "not a "}Superuser</li>
            <li>Is {!userData.is_shecodes_admin && "not a "}Global Administrator</li>
                <li>
                    <button className="update-auth-type" 
                            onClick={navigateToPersonYouWantToMakeAdmin}>
                        Update Admin Permissions
                    </button>
                </li>
            <li>Is {!userData.is_approver && "not a "}Global Approver</li>
            <li>
                <button className="update-to-approver"
                        onClick={navigateToPersonYouWantToMakeApprover}>
                    Update Approver Permission
                </button>
            </li>
    
            {/* <li>Is {!isAssignedAdmin && "not an "}Administrator</li>
            <li>Is {!isAssignedApprover && "not an "}Approver</li> */}

        </ul>
        }
    </div>
    </>
    )
}

export default UpdateUserAuthListPage;