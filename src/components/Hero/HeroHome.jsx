import React from "react";


//components
import QRGenerator from "../QRCode/QRCode";

//styles
import "./Hero.css"

function Hero() {
return(
    <>
        <section className="hero">
            {/* <container className="hero-container"> */}
            
                <section className="hero-text-section">
                    <h1>Here we will have some <span class="hero-highlight"> kind </span> 
                     of quote with some <span class="hero-highlight">highlight</span>.
                    text!</h1>
                </section>

                <section className="qr-code-section qr-code-hero">
                    <QRGenerator />
                </section>
            {/* </container> */}
        </section>

        

    </>
)
}

export default Hero;