import React, { useEffect, useState } from "react";

function UpdateUserAuthListPage() {
    // State
    const [usernameList, setUsernameList] = useState();
    const [selectedUserID, setSelectedUserID] = useState();
    const [userData, setUserData] = useState();

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
    const getUserData = () => {
        fetch(`${process.env.REACT_APP_API_URL}users/${selectedUserID}`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setUserData(data);
        })
    };

    if (!usernameList) {
        return <h1>Loading User List...</h1>
    }

    const onSelectedUserChange = (event) => {
        setSelectedUserID(event.target.value);
        getUserData();
    }

    return (
    <>
    <div className="username-dropdown">
        <select onChange={onSelectedUserChange}>
            {usernameList.map((u) => (
                <option value={u.id}>{u.username}</option>
            ))}
        </select>

        {selectedUserID}
        {userData !== null &&
        <ul>
            <li>{userData.username}</li>
        </ul>
        }
    </div>
    </>
    )
}

export default UpdateUserAuthListPage;