import React, { Component } from "react";
import "../styles/component.css";
import logo from "../images/duradek-lower-mainland-vinyl-deck-logo.gif";

const Nav = require("react-bootstrap/lib/Nav");
const Navbar = require("react-bootstrap/lib/Navbar");
const NavItem = require("react-bootstrap/lib/NavItem");

class Navigation extends Component {
	render() {
		return (
			<div className="navigation">
				<Navbar inverse collapseOnSelect>
					<Navbar.Header>
						<Navbar.Brand>
							<a href="/">
								<img
									src={logo}
									alt="duradek-lower-mainland-vinyl-deck-logo"
									className="logo"
									width="120px"
								/>
							</a>
						</Navbar.Brand>
						<Navbar.Toggle />
					</Navbar.Header>
					<Navbar.Collapse>
						<Nav pullRight>
							<NavItem eventKey={1} href="/">
								Home
							</NavItem>
							<NavItem eventKey={2} href="/about">
								About Us
							</NavItem>
							<NavItem eventKey={3} href="/services">
								Services
							</NavItem>
							<NavItem eventKey={4} href="/contact">
								Contact
							</NavItem>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</div>
		);
	}
}

export default Navigation;
