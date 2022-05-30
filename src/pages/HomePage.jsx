// Home page
import React, { useState } from "react";

//components
import Hero from "../components/Hero/HeroHome";
import Modal from "../components/GlobalModal/GlobalModal";
import Footer from "../components/Footer/Footer";

//styles
import "../index.css"
import "./HomePage.css"

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

        <Footer />
    </>

}