import React, { useEffect, useState } from "react";

// Imports
import { Link } from "react-router-dom";

// Components
import SheCoderCard from "../../components/SheCoderCard/SheCoderCard";

function SheCoderListPage() {

    const SuperUser = window.localStorage.getItem("is_superuser");
    const Admin = window.localStorage.getItem("is_shecodes_admin");
   
    const IsAdmin = (Admin == 'true');
    const IsSuperUser = (SuperUser == 'true');

    // States
    const [sheCodersList, setSheCodersList] = useState([]);

    // Action & Helpers
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}users`)
            .then((results) => {
                return results.json();
            })
            .then((data) => {
                setSheCodersList(data);
            });
    }, []);

    return (
        <div className="coder-list-wrapper">
            <div id="intro-text">
                <h1>Meet the She Coders!</h1>
                {(IsAdmin || IsSuperUser) && <button><Link to="/auth-assignments/">Update Permissions</Link></button>}
            </div>

            <div className="coder-list">
                {sheCodersList.map((userData, key) => {
                    return <SheCoderCard 
                        key={`/profile-${userData.id}`} 
                        userData={userData}
                    />;
                })}
            </div>
        </div>
    );
}

export default SheCoderListPage;