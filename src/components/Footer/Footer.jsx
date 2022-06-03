import React from "react";
// import { h2 } from "react-router-dom";

import "./FooterStyles.css"

const FooterDone = () => {
return (
	<section className="box">
        {/* <section>
            <h1>
		    	She Codes WinWall is a space for the She Codes Australia community to share their experiences. 
	    	</h1>
        </section> */}

	<container className="container">
		<div className="row">
		<section className="column">
			<h1 className="heading">SheCodes</h1>
			<a className="footer-link" target="_blank" href="https://shecodes.com.au/">She Codes Official</a>
			<a className="footer-link" target="_blank" href="https://shecodes.com.au/program/plus/">Plus</a>
			<a className="footer-link" target="_blank" href="https://shecodes.com.au/program/workshops/">Workshops</a>
			<a className="footer-link" target="_blank" href="https://shecodes.com.au/program/flash/">Flash</a>

		</section> 

		<section className="column">
			<h1 className="heading">WinWall</h1>
			<a className="footer-link" target="_blank" href="https://shrouded-wave-23056.herokuapp.com/shecodes-user-list/">SheCoders</a>
			<a className="footer-link" target="_blank" href="https://shrouded-wave-23056.herokuapp.com/collections/">Collections</a>
			<a className="footer-link" target="_blank" href="https://shrouded-wave-23056.herokuapp.com/live-win-walls/">Live WinWalls</a>
			<a className="footer-link" target="_blank" href="https://shrouded-wave-23056.herokuapp.com/sign-up">Sign Up</a>

		</section> 

		<section className="column">
			<h1 className="heading">Website Creators</h1>
			<a className="footer-link"
                target="_blank" 
                href="https://www.linkedin.com/in/maria-c-12688b186/">
                
                    Maria
				</a> 
				<a 
					className="footer-link"
					target="_blank" 
					href="https://www.linkedin.com/in/kristie-brandis-861a781aa/"
					>
						Kris
				</a> 
				
				<a className="footer-link"
					target="_blank" 
					href="https://www.linkedin.com/in/hannah-bethhannah-becker/"
					>
						Hannah
				</a> 

				<a className="footer-link"
					target="_blank" 
					href="https://www.linkedin.com/in/camille-legoff/"
					>
						Camille
				</a> 
		
		</section> 
		
		 <section className="column">
			<h1 className="heading">Socials</h1>
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
				<h3>Powered by She Codes Plus, coffee and lots of team work.
				&copy; 2022
				</h3>
        </div>
    </container>
	</section>
    );
};
export default FooterDone;
