import React, { useEffect, useState } from "react";

// Imports
import { Link } from "react-router-dom";

// Components
import SheCoderCard from "../../components/SheCoderCard/SheCoderCard";

function SheCoderListPage() {

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
                <h2>Are you an Administrator? Follow this link to edit user permissions: <Link to="/auth-assignments/">Admin Permissions</Link></h2>
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