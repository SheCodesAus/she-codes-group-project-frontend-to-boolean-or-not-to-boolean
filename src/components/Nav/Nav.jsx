// Nav Page
// Imports
import React, { useState } from "react";
import { Button } from "./Button/ChangingButton";
import { Link, useNavigate } from "react-router-dom";

// Styles
import "./Nav.css";

function Nav() {

    // Hamburger State
    const [isMenuExpanded, setMenuExpanded] = useState(false);

    // Navigation Links
    const navigate = useNavigate();

    const navigateToLogin = () => {
        navigate("/login/")
    }

    const navigateToProfile = () => {
        let id = window.localStorage.getItem("id")
        navigate(`users/${id}`)
    }

    const navigateToSignUp = () => {
        navigate("/sign-up")
    }

    // Handlers and Auth Checks
    const handleSignOut = () => {
        // Remove login token token to remove logged in user data
        window.localStorage.removeItem("token");

        // Make sure we navigate back to login page
        navigateToLogin()
    }

    const checkUser = (isBurgerMenu) => {
        // Get the user token. The !! ensure that the token "string" or undefined becomes true or false
        const isUserLoggedIn = window.localStorage.getItem("token");

        const className = "nav-links-mobile";

        const loginButton = <Button className={className} onClick={navigateToLogin}>Login</Button>;
        const signOutButton = <Button className={className} onClick={handleSignOut}>Sign Out</Button>;

        const loginLink = <button className={className} onClick={handleSignOut}>Login</button>;
        const signOutLink = <button className={className} onClick={handleSignOut}>Sign Out</button>

        // Check is the user logged in (yes => show sign out) (no => show login)
        if (isBurgerMenu) {
            return isUserLoggedIn 
                ? signOutButton
                : loginButton
        } else {
            return isUserLoggedIn 
                ? signOutLink
                : loginLink
        }   
    }

    const profileLink = (profileLinkVisible) => {
        const authenticatedUser = window.localStorage.getItem("token");

        const profileButton = <button className="nav-links" onClick={navigateToProfile}>Profile</button>;
        const signUpButton = <button className="nav-links" onClick={navigateToSignUp}>Sign Up</button>;

        if (profileLinkVisible) {
            return authenticatedUser
                ? profileButton
                : signUpButton
        }
    }

    // Hamburger Handlers
    const handleClick = () => {
        setMenuExpanded(!isMenuExpanded)
    };
    const closeMenu = () => {
        setMenuExpanded(false)
    }

    return(
        <nav className="navbar-items">
            <Link className="navbar-logo" to="/"><h1>Win Wall</h1></Link>
            
            <div className="menu-icon" onClick={handleClick}>
                <li className={
                    // Hamburger Menu
                    isMenuExpanded 
                    ? 'fas fa-times' 
                    : 'fas fa-bars'}>
                </li>
            </div>

            <ul className={
                isMenuExpanded 
                ? 'nav-menu active' 
                : 'nav-menu'}>
                    <Link className="nav-links" to="/" onClick={() => closeMenu()}>Collections</Link>
                    {profileLink(true)}
                    {checkUser(false)}
            </ul>
            {checkUser(true)}
        </nav>
    )
};

export default Nav;