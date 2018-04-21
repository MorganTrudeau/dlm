import React, { Component } from "react";
import "../styles/component.css";

const Carousel = require("react-bootstrap/lib/Carousel");

class CarouselComp extends Component {
  render() {
    return (
      <div className="carousel">
        <Carousel indicators={false} controls={false} pauseOnHover={false}>
          {this.props.imgs
            ? this.props.imgs.map((img, index) => (
                <Carousel.Item key={index} className="relative">
                  <img src={img.src} alt={img.alt} />
                </Carousel.Item>
              ))
            : null}
        </Carousel>
      </div>
    );
  }
}

export default CarouselComp;
