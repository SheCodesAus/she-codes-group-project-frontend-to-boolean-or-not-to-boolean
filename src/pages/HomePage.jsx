// Home page
import React, { useState } from "react";

//components
import DjangoWall from "../components/QRCode/DjangoQR";
import PythonWall from "../components/QRCode/PythonQR"
import FlashWall from "../components/QRCode/FlashQR"
import HTMLWall from "../components/QRCode/HTMLQR"
import JavascriptWall from "../components/QRCode/JavascriptQR"
import ReactWall from "../components/QRCode/ReactQR"

//styles
import "../index.css"
import "./HomePage.css"

export default function HomePage() {
    //function for shoing modal
    // const [show, setShow] = useState(false);

    return <>
        <div className="home-text">
            <p>
                <span className="highlight-text">She Codes WinWall </span><br></br>
                     is a space for you to share your experiences with us and the rest of the <span clasName="alt-color-text">She Codes community</span>.
                     Collaboration is at the heart of everything we do at She Codes and we welcome you to join us as we
                     <span clasName="alt-color-text"> learn and grow together</span> in our mission to to 
                     <span clasName="alt-color-text"> inspire, teach, and build a community</span> around tech for women in 
                      Australia. Leading to ongoing career pathways to make a tangible difference to diversity in the tech 
                      industry. Our goal is to inspire 100,000 women across Australia by 2025... and we hope you will be one of them. 
                      <span clasName="alt-color-text"> Thank you </span>for being a part of our community.
            </p>
        </div>

        {/* start modal buttons*/}
        <section className="modal-section">
            <h2>Looking for your event? Click on the subject you studied to be taken to you sticky note</h2>
            < DjangoWall />
            < FlashWall />
            < PythonWall />
            < HTMLWall />
            < JavascriptWall />
            < ReactWall />
        </section>


    </>

}