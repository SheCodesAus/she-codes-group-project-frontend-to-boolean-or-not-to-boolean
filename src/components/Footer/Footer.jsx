import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (
	<Box>
        <section>
            <h1 style={{ color: "var(--primary)",
				textAlign: "center",
				marginTop: "-50px", 
                // marginRight: "100px",
                marginBottom: "50px"}}>
		    She Codes WinWall is a space for the She Codes Australia community to share their experiences. 
	    </h1>
        </section>

	<Container>
		<Row>
		<Column>
			<Heading>Some text</Heading>
			<FooterLink href="#">text</FooterLink>
			<FooterLink href="#">testing</FooterLink>
			<FooterLink href="#">more test</FooterLink>
		</Column> 
		<Column>
			<Heading>Some text</Heading>
			<FooterLink href="#">text</FooterLink>
			<FooterLink href="#">testing</FooterLink>
			<FooterLink href="#">more test</FooterLink>
		</Column> 
		
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
	</Container>
    <Container>
        <section style={{ textAlign: "center", fontWeight: "bold", color: "var(--dark-text)"}}>
                Powered by She Codes Plus. Website by 
                <FooterLink 
                target="_blank" 
                href="https://www.linkedin.com/in/maria-c-12688b186/"
                >
                    Maria 
            </FooterLink>  , 
            
            <FooterLink 
                target="_blank" 
                href="https://www.linkedin.com/in/kristie-brandis-861a781aa/"
                >
                    Kris 
            </FooterLink>  , 
            
            <FooterLink 
                target="_blank" 
                href="https://www.linkedin.com/in/hannah-bethhannah-becker/"
                >
                    Hannah 
            </FooterLink>  , 

			<FooterLink 
                target="_blank" 
                href="https://www.linkedin.com/in/camille-legoff/"
                >
                    Camille 
            </FooterLink>  . 

             &copy; 2022
        </section>
    </Container>
	</Box>
    );
};
export default Footer;
