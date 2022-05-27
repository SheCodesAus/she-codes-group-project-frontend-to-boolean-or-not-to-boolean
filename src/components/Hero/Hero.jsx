import React from "react";


//components
import QRGenerator from "../QRCode/QRCode";

//styles
import "./Hero.css"

function Hero() {
return(
    <>
        <section className="hero">
        <h1>Here we will have some <span class="hero-highlight"> kind </span> 
        of quote with some <span class="hero-highlight">highlight</span>.
        text!</h1>
        </section>

    </>
)
}

export default Hero;