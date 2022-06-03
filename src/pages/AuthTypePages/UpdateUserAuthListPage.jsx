import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

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


    // console.log("user", userData);

    // const assignmentsString = userData.assignments;
    // const assignments = assignmentsString ? JSON.parse(assignmentsString) : [];
    
    // let isAssignedAdmin = false;
    // let isAssignedApprover = false;
 
    // for (let index = 0; index < assignments.length; index++) {
    //       const element = assignments[index];

    //     const collection_assignment = element.collection_id
    //     const winwall_assignment = element.win_wall_id
    //     const assigned_approver = element.is_approver
    //     const assigned_admin = element.is_admin

    //     isAssignedAdmin = isAssignedAdmin || (assigned_admin == true )
    //     isAssignedApprover = isAssignedApprover || (assigned_approver == true )
    // }

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

    const wallAssignment = (a) => {
        if (a.win_wall_id == null && a.collection_id == null) {
            return (
                'No WinWall'
            )
        }

        else if (a.collection_id == null && a.win_wall_id != null ) {
            return (
                'WinWall ' + a.win_wall_id
            )
        }

        else if (a.collection_id != null) {
            return (
                'All WinWalls in Collection ' + a.collection_id
            )
        }

        else{
            return (
                <></>
            )
        }

      
    }



    const assignment = () => {

        if(!userData)
            return (<></>);
            

        return (
            <>
            <br></br>
            <h3>User Assignments</h3>
            <br></br>
            <table  class="tg">
                <thead>
                    <tr>
                        <td>Win Wall</td>
                        <td>Is Approver</td>
                        <td>Is Admin</td>
                        <td>Delete</td>
                    </tr>
                </thead>
            
            <tbody>
            {userData.assignments.filter((a) => a.win_wall_id != null).map( (a) => (
                <tr>
                    <td>{a.win_wall_id}</td>
                    <td>{a.is_approver ? 'Yes' : 'No'}</td>
                    <td>{a.is_admin ? 'Yes' : 'No'}</td>
                    <td>X</td>
                
                {/* <li>Is  {a.is_admin ? '' : 'Not'} an Admin for {wallAssignment(a)}  {a.is_approver ? '' : 'Not'} Approver for {wallAssignment(a)} </li> */}
                
                </tr>


            ))}
            </tbody>
            </table>

            <br></br>
            <br></br>

            <table class="tg">
                <thead>
                    <tr>
                        <td>Collection of WinWalls</td>
                        <td>Is Approver</td>
                        <td>Is Admin</td>
                        <td>Delete</td>
                    </tr>
                </thead>
            
            <tbody>
            {userData.assignments.filter(a => a.collection_id != null).map( (a) => (
                <tr>
                    <td>{a.collection_id}</td>
                    <td>{a.is_approver ? 'Yes' : 'No'}</td>
                    <td>{a.is_admin ? 'Yes' : 'No'}</td>
                    <td>X</td>
                
                {/* <li>Is  {a.is_admin ? '' : 'Not'} an Admin for {wallAssignment(a)}  {a.is_approver ? '' : 'Not'} Approver for {wallAssignment(a)} </li> */}
                
                </tr>


            ))}
            </tbody>
            </table>

           <br></br>


            <Link to={`/users/${userData.id}/assignments/`}>
                    <button className="update-auth-type">
                    Add User Assignments
                    </button>
            </Link>
            </>
        )
    }

    

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
            {assignment()}

        </ul>
        }
    </div>
    </>
    )
}

export default UpdateUserAuthListPage;