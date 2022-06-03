// Home page
import React, { useState } from "react";


//components
import QRGenerator from "./QRCode";
import Modal from "../GlobalModal/GlobalModal"
export default function ReactWall() {
    const [show, setShow] = useState(false);

    return (
        <container className="ModalApp">
            <button onClick={() => setShow(true) }>React</button>
            <Modal title="React" children={<QRGenerator value="https://shrouded-wave-23056.herokuapp.com/collection/7/"/>} onClose={() => setShow(false)} show={show} />
            <Modal />
        </container>
    )
} 
