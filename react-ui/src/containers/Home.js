import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/container.css";
import CarouselComp from "../components/CarouselComp";
import sliderPic1 from "../images/duradek-lower-mainland-vinyl-deck.JPG";
import sliderPic2 from "../images/duradek-lower-mainland-vinyl-deck-construction.JPG";
import sunDeck from "../images/duradek-lower-mainland-vinyl-deck-sun-deck.jpg";
import railing from "../images/duradek-lower-mainland-vinyl-deck-railing.jpg";
import renovation from "../images/duradek-lower-mainland-vinyl-deck-renovation.JPG";
import roof from "../images/duradek-lower-mainland-vinyl-deck-roof.jpg";
import marcon from "../images/duradek-lower-mainland-vinyl-deck-marcon-partner.png";
import whoWeAre from "../images/duradek-lower-mainland-vinyl-deck-who-we-are.jpg";
import test1 from "../images/duradek-lower-mainland-testimonial-1.jpg";
import test2 from "../images/duradek-lower-mainland-testimonial-2.jpg";
import test3 from "../images/duradek-lower-mainland-testimonial-3.jpg";
import test4 from "../images/duradek-lower-mainland-testimonial-4.jpg";

const Button = require("react-bootstrap/lib/Button");

class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="home">
        <div className="cell0 relative">
          <CarouselComp
            imgs={[
              { src: sliderPic1, alt: "duradek-lower-mainland-vinyl-deck" },
              {
                src: sliderPic2,
                alt: "duradek-lower-mainland-vinyl-deck-construction"
              }
            ]}
          />
          <div className="hovering whiteText centerTextLeft smoke">
            <h1>Good Company</h1>
            <h6>
              Lorem ipsum dolor sit amet, assum munere aliquid ei usu, ad ullum
              assentior qui, nihil tollit quo ut. Sale tincidunt.
            </h6>
            <div>
              <Link to="/services">
                <Button bsSize="large" className="button">
                  <b>SERVICES</b>
                </Button>
              </Link>
              <Link to="/contact">
                <Button bsSize="large" className="whiteButton">
                  <b>GET A QUOTE</b>
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="bottomBar banner whiteText">
          <div className="centerText">
            <h3>Contractors and Construction Managers Since 1980</h3>
          </div>
          <div className="centerText">
            <Link to="/contact">
              <Button className="whiteButton">CONTACT US</Button>
            </Link>
          </div>
        </div>

        <div className="cell1 grid col3">
          <div>
            <img
              src={sunDeck}
              alt="duradek-lower-mainland-vinyl-deck-sun-deck"
              className="coverWidth"
            />
            <div className="textBlock">
              <h3>Waterproofing</h3>
              <p>
                Lorem ipsum dolor sit amet, assum munere aliquid ei usu, ad
                ullum assentior qui, nihil tollit quo ut. Sale tincidunt.
              </p>
              <Button className="button">READ MORE</Button>
            </div>
          </div>
          <div>
            <img
              src={railing}
              alt="duradek-lower-mainland-vinyl-deck-railing"
              className="coverWidth"
            />
            <div className="textBlock">
              <h3>Railings</h3>
              <p>
                Lorem ipsum dolor sit amet, assum munere aliquid ei usu, ad
                ullum assentior qui, nihil tollit quo ut. Sale tincidunt.
              </p>
              <Button className="button">READ MORE</Button>
            </div>
          </div>
          <div>
            <img
              src={renovation}
              alt="duradek-lower-mainland-vinyl-deck-renovation"
              className="coverWidth"
            />
            <div className="textBlock">
              <h3>Renovations</h3>
              <p>
                Lorem ipsum dolor sit amet, assum munere aliquid ei usu, ad
                ullum assentior qui, nihil tollit quo ut. Sale tincidunt.
              </p>
              <Button className="button">READ MORE</Button>
            </div>
          </div>
        </div>

        <div className="cell2 grid col2 whiteText">
          <div className="imageWrapper relative">
            <img
              src={whoWeAre}
              alt="duradek-lower-mainland-vinyl-deck-who-we-are"
              className="coverWidth"
            />
          </div>
          <div className="textBlock centerText coverHeight">
            <h3>Who We Are</h3>
            <p className="paddedText">
              Lorem ipsum dolor sit amet, assum munere aliquid ei usu, ad ullum
              assentior qui, nihil tollit quo ut. Sale tincidunt.
            </p>
            <Link to="/about">
              <Button className="whiteButton">ABOUT US</Button>
            </Link>
          </div>
        </div>

        <div className="cell3 tint cover">
          <img
            src={roof}
            alt="duradek-lower-mainland-vinyl-deck-roof"
            className="coverWidth"
          />
          <div className="textBlock yellowTint centerText whiteText">
            <h6>WORKING WITH US</h6>
            <h2 className="h2">CONTRACTORS AND CONSTRUCTION PROFESSIONALS</h2>
            <p>
              Lorem ipsum dolor sit amet, assum munere aliquid ei usu, ad ullum
              assentior qui, nihil tollit quo ut. Sale tincidunt. Lorem ipsum
              dolor sit amet, assum munere aliquid ei usu, ad ullum assentior
              qui, nihil tollit quo ut. Sale tincidunt.
            </p>
            <Link to="/contact">
              <Button className="button">GET A QUOTE</Button>
            </Link>
          </div>
        </div>

        <div className="cell4 entry">
          <div className="title">
            <h3>Testimonials</h3>
          </div>
          <div className="grid col2">
            <div className="outer">
              <div className="inner centerText">
                <p>
                  Lorem ipsum dolor sit amet, assum munere aliquid ei usu, ad
                  ullum assentior qui, nihil tollit quo ut. Sale tincidunt.
                  Lorem ipsum dolor sit amet, assum munere aliquid ei usu, ad
                  ullum assentior qui, nihil tollit quo ut. Sale tincidunt.
                </p>
              </div>
              <img src={test1} alt="duradek-lower-mainland-testimonial" />
              <h6>Sally White</h6>
            </div>
            <div className="outer">
              <div className="inner centerText">
                <p>
                  Lorem ipsum dolor sit amet, assum munere aliquid ei usu, ad
                  ullum assentior qui, nihil tollit quo ut. Sale tincidunt.
                  Lorem ipsum dolor sit amet, assum munere aliquid ei usu, ad
                  ullum assentior qui, nihil tollit quo ut. Sale tincidunt.
                </p>
              </div>
              <img src={test2} alt="duradek-lower-mainland-testimonial" />
              <h6>James Smith</h6>
            </div>
            <div className="outer">
              <div className="inner centerText">
                <p>
                  Lorem ipsum dolor sit amet, assum munere aliquid ei usu, ad
                  ullum assentior qui, nihil tollit quo ut. Sale tincidunt.
                  Lorem ipsum dolor sit amet, assum munere aliquid ei usu, ad
                  ullum assentior qui, nihil tollit quo ut. Sale tincidunt.
                </p>
              </div>
              <img src={test3} alt="duradek-lower-mainland-testimonial" />
              <h6>Jane Doe</h6>
            </div>
            <div className="outer">
              <div className="inner centerText">
                <p>
                  Lorem ipsum dolor sit amet, assum munere aliquid ei usu, ad
                  ullum assentior qui, nihil tollit quo ut. Sale tincidunt.
                  Lorem ipsum dolor sit amet, assum munere aliquid ei usu, ad
                  ullum assentior qui, nihil tollit quo ut. Sale tincidunt.
                </p>
              </div>
              <img src={test4} alt="duradek-lower-mainland-testimonial" />
              <h6>Chris Rock</h6>
            </div>
          </div>
        </div>

        <div className="cell5">
          <div className="title">
            <h3>Clients</h3>
          </div>
          <div className="outer">
            <div className="inner">
              <img src={marcon} alt="marcon" />
            </div>
            <div className="inner">
              <img src={marcon} alt="marcon" />
            </div>
            <div className="inner">
              <img src={marcon} alt="marcon" />
            </div>
            <div className="inner">
              <img src={marcon} alt="marcon" />
            </div>
            <div className="inner">
              <img src={marcon} alt="marcon" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
