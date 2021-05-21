import React from 'react'
import './main-landing.css';
import NavBar from "../NavBar";
import { Container, Row, Col } from "react-bootstrap";

export default function Perks() {
  return (
    <div>
      <NavBar/>
    <div class="perks-bg-color">

      <h2 class="perks-section-title">Perks</h2>


      <Container>
        <Row>
          <Col>
            <p class="perks-col-line-break">___________</p>
            <h3 class="perks-col-title">Subscription Payment Model</h3>
            <p class="perks-col-text">No commitment, cancel anytime. Never worry about forgetting a payment again!</p>
          </Col>
          <Col>
            <p class="perks-col-line-break">___________</p>
            <h3 class="perks-col-title">No Fee Cancelation Policy</h3>            
            <p class="perks-col-text">No commitment, cancel anytime. Never worry about forgetting a payment agai!</p>
          </Col>
          <Col>
            <p class="perks-col-line-break">___________</p>
            <h3 class="perks-col-title">Subscription Payment Model</h3>
            <p class="perks-col-text">No commitment, cancel anytime. Never worry about forgetting a payment again!</p>
          </Col>
        </Row>
      </Container>
    </div>
    </div>
  )
}