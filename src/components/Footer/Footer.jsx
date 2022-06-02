import React from "react";
// import { h2 } from "react-router-dom";

import "./FooterStyles.css"

const FooterDone = () => {
return (
	<section className="box">
        <section>
            <h1>
		    	She Codes WinWall is a space for the She Codes Australia community to share their experiences. 
	    	</h1>
        </section>

	<container className="container">
		<div className="row">
		<section className="column">
			<h1 className="heading">SheCodes</h1>
			<h2 className="footer-link" href="https://shecodes.com.au/">She Codes Official</h2>
			<h2 className="footer-link" href="https://shecodes.com.au/program/plus/">Plus</h2>
			<h2 className="footer-link" href="https://shecodes.com.au/program/workshops/">Workshops</h2>
			<h2 className="footer-link" href="https://shecodes.com.au/program/flash/">Flash</h2>

		</section> 
		<section className="column">
			<h1 className="heading">Like t</h1>
			<h2 className="footer-link" href="#">testing</h2>
			<h2 className="footer-link" href="#">more test</h2>
		</section>

		<section className="column">
			<h1 className="heading">SheCodes</h1>
			<h2 className="footer-link" href="https://shecodes.com.au/">She Codes Official</h2>
			<h2 className="footer-link" href="https://shecodes.com.au/program/plus/">Plus</h2>
			<h2 className="footer-link" href="https://shecodes.com.au/program/workshops/">Workshops</h2>
			<h2 className="footer-link" href="https://shecodes.com.au/program/flash/">Flash</h2>

		</section> 
		
		 <section className="column">
			<h1 className="heading">Some text</h1>
			<h2 className="footer-link" href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</h2>
			<h2 className="footer-link" href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</h2>
			<h2 className="footer-link" href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</h2>
			<h2 className="footer-link" href="#">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
			</h2> 
		</section>
		</div>
	</container>
	<container className="container">
        <div className="footer-div heading">
				<h3>Powered by She Codes Plus. Website by
				<a className="footer-link"
                target="_blank" 
                href="https://www.linkedin.com/in/maria-c-12688b186/">
                
                    Maria  ,
				</a> 
				
				<a 
					className="footer-link"
					target="_blank" 
					href="https://www.linkedin.com/in/kristie-brandis-861a781aa/"
					>
						Kris  ,
				</a> 
				
				<a className="footer-link"
					target="_blank" 
					href="https://www.linkedin.com/in/hannah-bethhannah-becker/"
					>
						Hannah  ,
				</a> 

				<a className="footer-link"
					target="_blank" 
					href="https://www.linkedin.com/in/camille-legoff/"
					>
						Camille  .
				</a> 

				&copy; 2022
				</h3>
        </div>
    </container>
	</section>
    );
};
export default FooterDone;
