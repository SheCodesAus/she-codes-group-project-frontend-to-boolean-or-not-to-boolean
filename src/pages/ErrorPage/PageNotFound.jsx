import React from 'react';
import Cupcake from "./cupcake-p-n-f.jpeg"

//styles
import "./PageNotFound.css"

const PageNotFound = () => {
    return (
        <section className="error">
            <img 
            className="cupcake-404" 
            src={Cupcake}>

            </img>
	    </section>
    )
    

}

export default PageNotFound;
