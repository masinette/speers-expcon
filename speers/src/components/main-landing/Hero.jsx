import React from 'react';
import './main-landing.css';
import NavBar from "../NavBar";
import { Carousel } from "react-bootstrap";
import firstImage from "../../images/image1.png";
import secondImage from "../../images/image2.png";
import thirdImage from "../../images/image3.png";
import TryItButton from "../buttons/TryItButton";


export default function Hero() {

  return (
    <div class="hero-bg-img">
          <NavBar/>
      <Carousel fade>
        <Carousel.Item interval={10000}>
          <img
            className="d-block w-100"
            src={firstImage}
            alt="First slide"
            />
            <TryItButton/>
          <Carousel.Caption >
            <h3>INTERACTIVE CONCERT EXPERIENCE</h3>
            <p>Experience your favourite artists like never before and from the comfort of your own home.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={secondImage}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>INTERACTIVE CONCERT EXPERIENCE</h3>
            <p>Experience your favourite artists like never before and from the comfort of your own home.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={thirdImage}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>INTERACTIVE CONCERT EXPERIENCE</h3>
            <p>Experience your favourite artists like never before and from the comfort of your own home.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}