import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/component.css";

const Button = require("react-bootstrap/lib/Button");

class Footer extends Component {
	render() {
		return (
			<div className="footer">
				<div className="grid col3">
					<div className="cell0 centerText">
						<p>
							<a href="/">Home</a>
						</p>
						<p>
							<a href="/about">About Us</a>
						</p>
						<p>
							<a href="/services">Services</a>
						</p>
						<p>
							<a href="/contact">Contact</a>
						</p>
					</div>
					<div className="cell1 centerText">
						<Link to="/contact">
							<Button bsSize="large" className="button">
								GET A QUOTE
							</Button>
						</Link>
					</div>
					<div className="cell2 centerText">
						<p>Adress</p>
						<p>Phone Number</p>
						<p>Privacy Policy</p>
						<p>Terms of Use</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Footer;
