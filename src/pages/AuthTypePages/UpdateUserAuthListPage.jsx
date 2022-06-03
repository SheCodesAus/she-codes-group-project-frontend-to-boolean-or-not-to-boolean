import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Bin from "../../components/images/icons/remove-circle.png";

// Imports
import SuperUserImg from "../../components/images/icons/super-logo.png";
import AdminUserImg from "../../components/images/icons/system-admin.png";
import ApproverImg from "../../components/images/icons/task-completed-2.png";
import SheCoderImg from "../../components/images/icons/external-developer-web-development-flaticons-flat-flat-icons.png"
import Tooltip from "../../components/ToolTips/ToolTip";


//styles
import "./AuthStyles.css"
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

    // Auth Checks
    const SuperUser = window.localStorage.getItem("is_superuser");
    const Admin = window.localStorage.getItem("is_shecodes_admin");
   
    const IsAdmin = (Admin == 'true');
    const IsSuperUser = (SuperUser == 'true');

    if (!IsAdmin && !IsSuperUser) {
        navigate(`/shecodes-user-list/`);
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

    const [collectionList, setCollection] = useState();

  useEffect(() => {
      fetch(`${process.env.REACT_APP_API_URL}view-collections/`)
      .then((results) => {
          console.log("results",results);    
      return results.json();
      })
      
      .then((data) => {
        setCollection(data);
         
      });
     
    
      }, []);
  
      
  const [winwallList, setWinwallList] = useState();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}win-walls/`)
    .then((results) => {
        console.log("results",results);    
    return results.json();
    })
    
    .then((data) => {
        setWinwallList(data);
       
    });
   
  
    }, []);

    if (!collectionList) {
        return <h3>Loading..</h3>;
    }
    
    if (!winwallList) {
        return <h3>Loading..</h3>;
    }

    if (!usernameList) {
        return <h1>Loading User List...</h1>
    }
   
   
    console.log("user", userData);

    

    const onSelectedUserChange = (event) => {
        getUserData(event.target.value);
    }


   
    const handleDelete = async (event,assignmentId, userId) => {
        const token = window.localStorage.getItem("token");
        if (!token)return;
        event.preventDefault();
        try {
          const res = await fetch(`${process.env.REACT_APP_API_URL}assignment/${assignmentId}/`, {
            method: "delete",
            headers: {
            
              Authorization: `Token ${token}`,
            },
           
          });
        
        getUserData(userId)
         
          
          
        } catch (err) {
          console.log(err);
        }
      };
  



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
                        <td>Win Wall ID</td>
                        <td>Win Wall Title</td>
                        <td>Is Approver</td>
                        <td>Is Admin</td>
                        <td>Delete</td>
                    </tr>
                </thead>
            
            <tbody>
            {userData.assignments.filter((a) => a.win_wall_id != null).map( (a) => (
                <tr>
                    <td>{a.win_wall_id}</td>
                    <td>{winwallList.find(w => w.id == a.win_wall_id).title}</td>
                    <td>{a.is_approver ? 'Yes' : 'No'}</td>
                    <td>{a.is_admin ? 'Yes' : 'No'}</td>
                    <Tooltip content=" Delete " direction="right">
                    <td> 
                        <button type="submit" onClick={(e)=> handleDelete(e,a.id,userData.id)} className="icon-button">
                        {/* Update StickyNote */}
                        <img src={Bin} />
                    </button>
                    
                    </td>
                    </Tooltip>
                
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
                        <td>Collection ID of WinWalls</td>
                        <td>Collection Title</td>
                        <td>Is Approver</td>
                        <td>Is Admin</td>
                        <td>Delete</td>
                    </tr>
                </thead>
            
            <tbody>
            {userData.assignments.filter(a => a.collection_id != null).map( (a) => (
                <tr>
                    <td>{a.collection_id}</td>
                    <td>{collectionList.find(c => c.id == a.collection_id).title}</td>
                    <td>{a.is_approver ? 'Yes' : 'No'}</td>
                    <td>{a.is_admin ? 'Yes' : 'No'}</td>
                    <Tooltip content=" Delete " direction="right">
                    <td><button type="submit" onClick={(e)=> handleDelete(e,a.id,userData.id)} className="icon-button">
                        {/* Update StickyNote */}
                        <img src={Bin} />
                    </button>
                    </td>
                    </Tooltip>
                
                {/* <li>Is  {a.is_admin ? '' : 'Not'} an Admin for {wallAssignment(a)}  {a.is_approver ? '' : 'Not'} Approver for {wallAssignment(a)} </li> */}
                
                </tr>


            ))}
            </tbody>
            </table>

           <br></br>


            <Link to={`/users/${userData.id}/assignments/`}>
                {/* Checks that only the Admin/Super User can change assignments */}
                    {(IsAdmin || IsSuperUser) &&
                    <button className="update-auth-type">
                    Add User Assignments
                    </button>}
            </Link>
            </>
        )
    }

    

    return (
    <>
    <section className="auth-section">
        <h1>Choose the user that you would like to provide access to:</h1>
    
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
            <ul className="ul-auth">
                    <li>{userData.username}</li>
                    <div className="auth-section-icons">

                    <li>{userData.is_superuser && 
                        <img className="auth-icon" src={SuperUserImg} alt="super-user"/>}
                    </li>
                    <li>{userData.is_shecodes_admin &&                 
                        <img className="auth-icon" src={AdminUserImg} alt="admin-user"/>}
                    </li>
                    </div>
                    <div className="auth-section-icons">
                    <Tooltip content="   You are amazing " direction="right">
                    <li>
                        <img className="auth-icon" src={SheCoderImg} alt="user"/>
                    </li>
                    </Tooltip>
                    </div>


               
            {/* Checking that Only the Super User can press button */}
            <li>{(IsSuperUser) &&
                <button className="update-auth-type" 
                        onClick={navigateToPersonYouWantToMakeAdmin}>
                    Update Admin Permissions
                </button>}
            </li>
            <li>{userData.is_approver && 
                <img src={ApproverImg} alt="approver-user"/>}
            </li>
            {/* Checking that Only the SuperUser/Admin can press button */}
            <li>{(IsAdmin || IsSuperUser) &&
                <button className="update-to-approver"
                        onClick={navigateToPersonYouWantToMakeApprover}>
                    Update Approver Permission
                </button>}
            </li>
    
            {/* <li>Is {!isAssignedAdmin && "not an "}Administrator</li>
            <li>Is {!isAssignedApprover && "not an "}Approver</li> */}
            {assignment()}

        </ul>       
        }
    </div>
    </section>

    </>
    )
}

export default UpdateUserAuthListPage;