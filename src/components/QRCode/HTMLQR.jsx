// Home page
import React, { useState } from "react";


//components
import QRGenerator from "./QRCode";
import Modal from "../GlobalModal/GlobalModal"
export default function HTMLcssWall() {
    const [show, setShow] = useState(false);

    return (
        <container className="ModalApp">
            <button onClick={() => setShow(true) }>HTML/CSS</button>
            <Modal title="HTML/CSS" children={<QRGenerator value="https://shrouded-wave-23056.herokuapp.com/collection/3/"/>} onClose={() => setShow(false)} show={show} />
            <Modal />
        </container> 
    )
} 
