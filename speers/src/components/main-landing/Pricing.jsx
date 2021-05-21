import React from 'react';
import NavBar from "../NavBar";
import { Container, Row, Col, Badge } from "react-bootstrap";

export default function Pricing() {
  return (
    // <div class="pricing-page-bg-color">
    
    <div class="pricing-bg-color">
        <NavBar/>
        <h2 class="pricing-section-title">Pricing</h2>
        <p class="pricing-section-description">
          Test out our app today! Choose from three subscription Based payment models.
        </p>

        <Container class="pricing-packages">
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
                <Badge pill variant="basic" class="pricing-button-select">Select</Badge>
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
                <Badge pill variant="advanced" class="pricing-button-select">Select</Badge>

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
              <div class="pricing-col-wrapper-pro">
                <Badge pill variant="pro" class="pricing-button-select">Select</Badge>
              </div>
              </div>
            </Col>
          </Row>
        </Container>
    </div>


  )
};

