// Nav Page
// Imports
import React, { useState } from "react";
import { Button } from "./Button/ChangingButton";
import { Link, useNavigate } from "react-router-dom";
import Logo from '../images/win-wall-logo-optimized.svg';
// import { Text, StyleSheet } from "react-native";


//icons
//icons that can be used for hamburger menu imported from react
import { MdClose, MdOutlineDateRange } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

// Styles
import "./Nav.css";
import "./Hamburger.css"

//function for nav bar
function Nav() {

    // Hamburger State
    const [isMenuExpanded, 
        setMenuExpanded] = 
        useState(false);

    // Navigation Links
    const navigate = useNavigate();

    const navigateToLogin = () => {
        navigate
        ("/login/")
    }

    const navigateToProfile = () => {
        let id = window.localStorage.getItem("id")
        navigate(`/profile-page/${id}`)
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

        const loginButton = 
        <Button 
        className={className} 
        onClick={navigateToLogin}>
            Login
        </Button>;

        const signOutButton = 
        <Button 
        className={className} 
        onClick={handleSignOut}>
            Sign Out
        </Button>;

        const loginLink = 
        <button 
        className={className}
        onClick={handleSignOut}>
            Login
        </button>;

        const signOutLink = 
        <button className={className} 
        onClick={handleSignOut}>
            Sign Out
        </button>;

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

        const profileButton = 
        <button 
        className="nav-links" 
        onClick={navigateToProfile}>
            Profile
        </button>;

        const signUpButton = 
        <button className="nav-links" 
        onClick={navigateToSignUp}>
            Sign Up
        </button>;

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
    const closeMenuExpaded = () => {
        setMenuExpanded(false)
    }

    //hamburger menu handlers
    const [navbarOpen, setNavbarOpen] = useState(false)

    const handleToggle = () => {
        setNavbarOpen(!navbarOpen)
    }

    const closeMenu = () => {
        setNavbarOpen(false)
        setMenuExpanded(false)      
    }

    //set header as a logo to use {} symbols
    const winHeader = "Win"
    const wallHeader = "{Wall}"

    const fullHeader = `${winHeader}${wallHeader}`

    return(
        <nav className="navbar-items">
            {/* Logo section */}
            {/* used href rather than link to get the logo and text to stay in the same line as nav */}
            <a href="/"><img  
            className="logo-img" 
            src={Logo}></img></a>
            <a href="/" 
            className="logo-text">
                {fullHeader}</a>                    
            <ul 
                className={`nav-menu 
                ${isMenuExpanded 
                ? "nav-menu active" 
                : handleClick}`}>
                <Link 
                // link takes you to home
                    to="/" 
                    className="nav-links" 
                    onClick={
                        () => navigate()
                    }
                >
                    HomePage
                </Link>
                {/* <Link 
                // takes you to login page
                    to="/login"
                    className="nav-links"
                    onClick={
                        () => navigate()
                    }
                >
                    Login
                </Link> */}
                
                <Link 
                // Should be to 'collections' 
                // not sure on the correct link here - to be confirmed
                    to="/collections/"
                    className="nav-links"
                    onClick={
                        () => navigate()
                    }
                >
                    Collections
                </Link>
                {profileLink(true)}
                {checkUser(false)} 
                {checkUser(true)}

            </ul>   
            {/* //need to add code to remove/add nav classes based on screen size */}
            {/* //need to add code to remove/add nav links on click */}
            <button className="navBar nav-hamburger"
                    onClick={handleToggle}>                    
                    {navbarOpen ? (
                    <MdClose
                    style={{ color: "var(--secondary)", 
                    width: "30px", 
                    height: "30px" }} />
                ) : (
                    <FiMenu 
                    style={{ color: "var(--secondary)", 
                    width: "30px", 
                    height: "30px" }} />
                )}
                </button>  
                <ul
                    className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
                    <Link 
                        to="/" 
                        className="active-link" 
                        onClick={() => closeMenu()}
                    >
                        HomePage
                    </Link>
                    {/* <Link 
                        to="/login"
                        className="active-link"
                        onClick={() => closeMenu()}
                    >
                        Login
                    </Link> */}
                    <Link 
                    // Should be to 'collections' 
                    // not sure on the correct link here - to be confirmed
                    to="/win-walls/"
                    className="active-link"
                    onClick={
                        () => closeMenu()
                    }
                    >
                        Collections
                    </Link>
                {profileLink(true)}
                {checkUser(false)} 
                {/* {checkUser(true)} */}
            </ul>    
        </nav>
    )
};

export default Nav;