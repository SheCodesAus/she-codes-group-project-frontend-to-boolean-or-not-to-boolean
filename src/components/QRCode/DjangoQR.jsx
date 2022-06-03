// Home page
import React, { useState } from "react";


//components
import QRGenerator from "./QRCode";
import Modal from "../GlobalModal/GlobalModal"
export default function DjangoWall() {
    const [show, setShow] = useState(false);

    return (
        <container className="ModalApp">
            <button onClick={() => setShow(true) }>Django</button>
            <Modal  onClose={() => setShow(false)} title="Django" children={<QRGenerator value="https://www.google.com"r/>} show={show}/>
            <Modal />
        </container>  
    )
} 
 