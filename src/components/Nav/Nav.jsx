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
        navigate(`/profile/${id}`)
    }

    const navigateToSignUp = () => {
        navigate("/sign-up")
    }

    // Handlers and Auth Checks
    const handleSignOut = () => {
        // Remove login token token to remove logged in user data
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("is_approver");
        window.localStorage.removeItem("is_shecodes_admin");
        window.localStorage.removeItem("is_superuser");
        window.localStorage.removeItem("assignments");
        window.localStorage.removeItem("id");
        window.localStorage.removeItem("username");

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
            Your Profile
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
    const closeMenuExpanded = () => {
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

    return(
        <nav className="navbar-items">
            {/* Logo section */}
            {/* used href rather than link to get the logo and text to stay in the same line as nav */}
            <a href="/"><img  
            className="logo-img" 
            alt="win-wall logo"
            src={Logo}></img></a>
            <a href="/" 
            className="logo-text">
                Win&#123;<span>Wall</span>&#125;</a>                    
            <ul 
                className={`nav-menu 
                ${isMenuExpanded 
                ? "nav-menu active" 
                : handleClick}`}>
                <Link 
                // link takes you to home
                    to="/shecodes-user-list/" 
                    className="nav-links" 
                    onClick={
                        () => navigate()
                    }
                >
                    She Coders
                </Link>
                
                <Link 
                    to="/collections/"
                    className="nav-links"
                    onClick={
                        () => navigate()
                    }
                >
                    Collections
                </Link>

                <Link 
                    to="/live-win-walls/"
                    className="nav-links"
                    onClick={
                        () => navigate()
                    }
                >
                    Live WinWalls
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
                    <a href="/"><img  
                    className="logo-img logo-img-hamburger" 
                    alt="win-wall logo"
                    src={Logo}></img></a>
                    <Link 
                        to="/shecodes-user-list/" 
                        className="active-link" 
                        onClick={() => closeMenu()}
                    >
                        She Coders
                    </Link>
                    {/* <Link 
                        to="/login"
                        className="active-link"
                        onClick={() => closeMenu()}
                    >
                        Login
                    </Link> */}
                    <Link 
                    to="/collections/"
                    className="active-link"
                    onClick={
                        () => closeMenu()
                    }
                    >
                        Collections
                    </Link>

                    <Link 

                    to="/live-win-walls/"
                    className="active-link"
                    onClick={
                        () => closeMenu()
                    }
                    >
                        Live WinWalls
                    </Link>
                    
                {profileLink(true)}
                {checkUser(false)} 
                {/* {checkUser(true)} */}
            </ul>    
        </nav>
    )
};

export default Nav;