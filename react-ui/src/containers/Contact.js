import React, { Component } from "react";
import "../styles/container.css";
import Form from "../components/Form";

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
      <div className="contact">
        <div className="grad" />
        <div className="cell0 entry centerText">
          <h2>We Are Excited to Hear Your Ideas</h2>
          <h6>Your just a few clicks away from starting your new project.</h6>
          <div className="wrapper">
            <div className="rightText">
              <p>########</p>
              <p>British Columbia, Canada</p>
            </div>
            <div className="leftText">
              <p>
                <b>Tel:</b> +1-604-818-4261
              </p>
              <p>
                <b>Email:</b> tonyshort@hotmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="cell1 primaryBGColor entry centerText">
          <h6>Please fill out the form below for to start your quote.</h6>
          <Form />
        </div>
      </div>
    );
  }
}

export default Home;
