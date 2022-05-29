import React from "react";

// Styles
import './ChangingButton.css'
// import '../Hamburger.css'
// import '../Nav.css'


export const Button = ({
    children,
    type,
    onClick,
 
}) => {
    
    return (
        <button 
            className="btn" 
            onClick={onClick} 
            type={type}
        >
            {children}
        </button>
    )
}

