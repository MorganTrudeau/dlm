import React, { Component } from "react";
import "../styles/component.css";

class CollapseNav extends Component {
	render() {
		return (
			<div className="collapseNav primaryBGColor wrap-collabsible">
				<input id="collapsible" class="toggle" type="checkbox" />
				<label for="collapsible" class="lbl-toggle">
					Services
				</label>
				<div className="collapsible-content">
					<div className="content-inner">
						<div className="navItem first">Hardscape</div>
						<div className="navItem">Paving Stones</div>
						<div className="navItem">Lawn Installation</div>
						<div className="navItem">Irrigation & Lightings</div>
						<div className="navItem">Drainage Systems</div>
						<div className="navItem">Lawn Maintenance</div>
						<div className="navItem">Excavation Services</div>
						<div className="noBorder navItem">Softscape</div>
					</div>
				</div>
			</div>
		);
	}
}

export default CollapseNav;
