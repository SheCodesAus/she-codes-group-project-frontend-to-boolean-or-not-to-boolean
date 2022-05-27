// Home page
import React from "react";
import AsyncCSVStickyNote from "../components/ExportCSV/ExportCSVStickyNote";
import AsyncCSVUser from "../components/ExportCSV/ExportCSVUser";
import Hero from "../components/Hero/Hero";
import QRGenerator from "../components/QRCode/QRCode"

//styles
import "../index.css"

export default function HomePage() {
    return <>
        <div>
        <Hero />
        </div>
        <h3>
        Under Construction..
        </h3>;
        <AsyncCSVUser />
        <AsyncCSVStickyNote />
        <QRGenerator />
       
    </>

}