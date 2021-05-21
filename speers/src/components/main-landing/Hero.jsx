import React from 'react';
import './main-landing.css';
import NavBar from "../NavBar";
import { Carousel } from "react-bootstrap";
import firstImage from "../../images/image1.png";
import secondImage from "../../images/image2.png";
import thirdImage from "../../images/image3.png";


export default function Hero() {
  return (
    <div class="hero-bg-img">
      <NavBar/>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={firstImage}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={secondImage}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={thirdImage}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  )
}