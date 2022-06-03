import React from "react";


//components
import QRGenerator from "../QRCode/QRCode";

//styles
import "./Hero.css"

const Hero = props => {
return(
    <>
        <section className="hero">
            {/* <container className="hero-container"> */}
            
                <section className="hero-text-section">
                    <h1 className="hero-text">Share your <span class="hero-highlight"> wins </span> 
                     with the <span class="hero-highlight">She Codes </span>
                    community</h1>
                </section>

                <section className="qr-code-section qr-code-hero">
                    <QRGenerator value="https://shrouded-wave-23056.herokuapp.com/live-win-walls/" />
                </section>
            {/* </container> */}
        </section>

        

    </>
)
}

export default Hero;