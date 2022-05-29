// Home page
import React, { useState } from "react";


//components
import AsyncCSVStickyNote from "../components/ExportCSV/ExportCSVStickyNote";
import AsyncCSVUser from "../components/ExportCSV/ExportCSVUser";
import Hero from "../components/Hero/Hero";
import QRGenerator from "../components/QRCode/QRCode"
import Modal from "../components/GlobalModal/GlobalModal";

//styles
import "../index.css"

export default function HomePage() {
    //function for shoing modal
    const [show, setShow] = useState(false);

    return <>
        {/* start hero section */}
        <div>
        <Hero />
        </div>
        {/* end hero section */}

        {/* start modal button*/}
        <div className="ModalApp">
            <button onClick={() => setShow(true) }>Show Modal</button>
            {/* we pass the title as a prop and the content as a child because 
            we will have multiple elements inside the content in the future. */}
            <Modal title="My Modal"onClose={() => setShow(false)} show={show} />
            <p>This is modal body</p>
            <Modal />
        </div>
        {/* end modal button */}

        {/* start export csv */}
        <AsyncCSVUser />
        <AsyncCSVStickyNote />
        {/* end export csv */}
       
        {/* start QR generator */}
        <QRGenerator />
        {/* end QR Generator */}

    </>

}