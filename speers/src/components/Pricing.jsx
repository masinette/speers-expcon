import React from 'react';
import TryItButton from "./buttons/TryItButton";
import "./pricing.css";
import Perks from "./main-landing/Perks";
import Footer from "./main-landing/Footer";
import NavBar from "./NavBar";
import { Container, Row, Col } from "react-bootstrap";



export default function Pricing() {
  return (
    <div class="pricing-wrapper">
      <div class="pricing-bg-color">
        <TryItButton />

        <p>Pricing</p>
            <div class="pricing-bg-color">

      <h2 class="pricing-section-title">Pricing</h2>
      <p class="pricing-section-description">
        Test out our app today! Choose from three subscription Based payment models.
      </p>

      <Container>
        <Row>
          <Col>

            <div class="pricing-col-wrapper">
              <div class="pricing-col-wrapper-basic">
                <h5 class="pricing-type">Basic</h5> 
                <p>______</p>
                <h5 class="pricing-time">Monthly</h5>
                <h5 class="pricing-cost">$9</h5>
              </div>
            </div>

            <div>
              <ul class="pricing-list">
                <li>
                  &#x1F3B5; Very good 
                </li>
                <li>
                  &#x1F3B5; Amazing 
                </li>
                <li>
                  &#x1F3B5; Perfect job 
                </li>
                <li>
                  &#x1F3B5; Love this 
                </li>
                <li>
                  &#x1F3B5; It’s so good 
                </li>
                <li>
                  &#x1F3B5; Features
                </li>
              </ul>
            </div>
          </Col>

          <Col>
          <div class="pricing-col-wrapper">
            <div class="pricing-col-wrapper-advanced">
              <h5 class="pricing-type">Advanced</h5> 
              <p>______</p>
              <h5 class="pricing-time">Yearly</h5>
              <h5 class="pricing-cost">$99</h5>
            </div>
          </div>
            <div>
              <ul class="pricing-list">
                <li>
                  &#x1F3B5; Very very good 
                </li>
                <li>
                  &#x1F3B5; Even Amazing 
                </li>
                <li>
                  &#x1F3B5; Perfect job 
                </li>
                <li>
                  &#x1F3B5; Love this more
                </li>
                <li>
                  &#x1F3B5; It’s so so good 
                </li>
                <li>
                  &#x1F3B5; More Features
                </li>
              </ul>
            </div>
          </Col>          
          <Col>
            <div class="pricing-col-wrapper">
              <div class="pricing-col-wrapper-pro">
                <h5 class="pricing-type">Pro</h5> 
                <p>______</p>
                <h5 class="pricing-time">Yearly</h5>
                <h5 class="pricing-cost">$120</h5>
              </div>
            </div>
            <div>
              <ul class="pricing-list">
                <li>
                  &#x1F3B5; Very very good 
                </li>
                <li>
                  &#x1F3B5; Even more Amazing 
                </li>
                <li>
                  &#x1F3B5; Perfect job 
                </li>
                <li>
                  &#x1F3B5; Love this more 
                </li>
                <li>
                  &#x1F3B5; It’s so so good 
                </li>
                <li>
                  &#x1F3B5; More Features
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
      </div>
        {/* control bg color for this specific page, but keep Perks content */}
        <div class="pricing-perks-bg-color">
          <Perks />
        </div>
        <Footer/>
    </div>

  )
};

