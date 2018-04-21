import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/container.css";
import CollapseNav from "../components/CollapseNav";
import sunDeck from "../images/duradek-lower-mainland-vinyl-deck-sun-deck.jpg";

const Button = require("react-bootstrap/lib/Button");

class Services extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="services">
        <div className="collapseNav">
          <CollapseNav />
        </div>

        <div className="cell0 service first">
          <div className="banner">
            <h3>Waterproofing</h3>
          </div>
          <div className="grid col2">
            <div className="img">
              <img src={sunDeck} alt="" />
            </div>
            <div className="text">
              <h3>Have a Nice Deck</h3>
              <p className="paddedText">
                Lorem ipsum dolor sit amet, assum munere aliquid ei usu, ad
                ullum assentior qui, nihil tollit quo ut. Sale tincidunt. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <p className="paddedText">
                Minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>

        <div className="cell1 service">
          <div className="banner">
            <h3>Ralings</h3>
          </div>
          <div className="grid col2">
            <div className="img">
              <img src={sunDeck} alt="" />
            </div>
            <div className="text">
              <h3>You'll Love Our Railings</h3>
              <p className="paddedText">
                Lorem ipsum dolor sit amet, assum munere aliquid ei usu, ad
                ullum assentior qui, nihil tollit quo ut. Sale tincidunt. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <p className="paddedText">
                Minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>

        <div className="cell2 service">
          <div className="banner">
            <h3>Renovations</h3>
          </div>
          <div className="grid col2">
            <div className="img">
              <img src={sunDeck} alt="" />
            </div>
            <div className="text">
              <h3>New is Better Than Old</h3>
              <p className="paddedText">
                Lorem ipsum dolor sit amet, assum munere aliquid ei usu, ad
                ullum assentior qui, nihil tollit quo ut. Sale tincidunt. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <p className="paddedText">
                Minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>

        <div className="cell3 service last">
          <div className="banner">
            <h3>Deck</h3>
          </div>
          <div className="grid col2">
            <div className="img">
              <img src={sunDeck} alt="" />
            </div>
            <div className="text">
              <h3>Waterproofing</h3>
              <p className="paddedText">
                Lorem ipsum dolor sit amet, assum munere aliquid ei usu, ad
                ullum assentior qui, nihil tollit quo ut. Sale tincidunt. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <p className="paddedText">
                Minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
