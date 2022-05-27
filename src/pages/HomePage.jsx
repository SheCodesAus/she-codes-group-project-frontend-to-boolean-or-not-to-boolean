// Home page
import React from "react";

//components
import Hero from "../components/Hero/Hero";
import QRGenerator from "../components/QRCode/QRCode"

//styles
import "../index.css"

function HomePage() {
    return <>
    <div>
        <Hero />
    </div>
    <h3>
        Under Construction..
    </h3>;
        <QRGenerator />
    </>
}

export default HomePage;