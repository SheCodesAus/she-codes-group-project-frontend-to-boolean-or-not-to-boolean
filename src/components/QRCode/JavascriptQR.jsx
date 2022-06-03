// Home page
import React, { useState } from "react";


//components
import QRGenerator from "./QRCode";
import Modal from "../GlobalModal/GlobalModal"
export default function JavascriptWall() {
    const [show, setShow] = useState(false);

    return (
        <container className="ModalApp">
            <button onClick={() => setShow(true) }>Javascript</button>
            <Modal title="Javascript" children={<QRGenerator value="https://www.google.com"/>} onClose={() => setShow(false)} show={show} />
            <Modal />
        </container>
    )
} 
