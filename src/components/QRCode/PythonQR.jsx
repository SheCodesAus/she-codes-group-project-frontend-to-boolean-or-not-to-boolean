// Home page
import React, { useState } from "react";


//components
import QRGenerator from "./QRCode";
import Modal from "../GlobalModal/GlobalModal"
export default function PythonWall() {
    const [show, setShow] = useState(false);

    return (
        <container className="ModalApp">
            <button onClick={() => setShow(true) }>Python</button>
            <Modal title="Python" children={<QRGenerator value="https://shrouded-wave-23056.herokuapp.com/collection/5/"/>} onClose={() => setShow(false)} show={show} />
            <Modal />
        </container>
    )
} 
 