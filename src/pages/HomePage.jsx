// Home page
import React, { useState, useEffect } from "react";
import AsyncCSVStickyNote from "../components/ExportCSV/ExportCSVStickyNote";
import AsyncCSVUser from "../components/ExportCSV/ExportCSVUser";
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
        <AsyncCSVUser />
        <AsyncCSVStickyNote />
        <QRGenerator />
       
    </>

export default HomePage;