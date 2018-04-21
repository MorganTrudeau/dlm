import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/container.css";
import serviceAreaPic from "../images/duradek-lower-mainland-vancouver-service-area.jpg";
import aboutPic from "../images/duradek-lower-mainland-what-we-do-services-vinyl-deck.jpg";

const Button = require("react-bootstrap/lib/Button");

class About extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="about">
        <div className="cell0 banner">
          <div>
            <h2>Who We Are</h2>
          </div>
          <div>
            <Link to="/contact">
              <Button className="whiteButtonReverse">GET IN TOUCH</Button>
            </Link>
          </div>
        </div>
        <div className="cell1 grid col2">
          <div className="outer">
            <div className="inner">
              <img
                src={serviceAreaPic}
                alt="duradek-lower-mainland-vancouver-service-area"
                className="coverWidth"
              />
            </div>
            <div className="inner textBlock">
              <h3>Proud to Serve</h3>
              <p>
                Lorem ipsum dolor sit amet, assum munere aliquid ei usu, ad
                ullum assentior qui, nihil tollit quo ut. Sale tincidunt. Lorem
                ipsum dolor sit amet, assum munere aliquid ei usu, ad ullum
                assentior qui, nihil tollit quo ut. Sale tincidunt.
              </p>
            </div>
          </div>
          <div className="outer">
            <div className="inner">
              <img
                src={aboutPic}
                alt="duradek-lower-mainland-what-we-do-services-vinyl-deck"
                className="coverWidth"
              />
            </div>
            <div className="inner textBlock">
              <h3>What We Do</h3>
              <p>
                Lorem ipsum dolor sit amet, assum munere aliquid ei usu, ad
                ullum assentior qui, nihil tollit quo ut. Sale tincidunt. Lorem
                ipsum dolor sit amet, assum munere aliquid ei usu, ad ullum
                assentior qui, nihil tollit quo ut. Sale tincidunt.
              </p>
            </div>
          </div>
        </div>
        <div className="cell2 grid col2 primaryBGColor">
          <div className="centerText entry">
            <h3>20 Years of Service</h3>
            <p>
              Lorem ipsum dolor sit amet, assum munere aliquid ei usu, ad ullum
              assentior qui, nihil tollit quo ut. Sale tincidunt. Lorem ipsum
              dolor sit amet, assum munere aliquid ei usu, ad ullum assentior
              qui, nihil tollit quo ut. Sale tincidunt.
            </p>
          </div>
          <div className="centerText entry">
            <Link to="/contact">
              <Button bsSize="large" className="whiteButton">
                CONTACT US
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
