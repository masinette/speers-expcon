import React from 'react'
import './main-landing.css';
import NavBar from "../NavBar";
import { Container, Row, Col } from "react-bootstrap";
import TryItButton from "../buttons/TryItButton";
import TryItButtonWhite from "../buttons/TryItButtonWhite"

export default function Perks(props) {
  return (
    <div>
      <NavBar button={props.button}/>
      <div class="perks-bg-color">

        <h2 class="perks-section-title">Perks</h2>


        <Container>
          <Row>
            <Col>
              <div class={props.perksCol1}>
                <p class="perks-col-line-break">___________</p>
                <h3 class="perks-col-title">Subscription Payment Model</h3>
              </div>
                <p class="perks-col-text">No commitment, cancel anytime. Never worry about forgetting a payment again!</p>
            </Col>
            <Col>
              <div class={props.perksCol2}>
                <p class="perks-col-line-break">___________</p>
                <h3 class="perks-col-title">No Fee Cancelation Policy</h3>            
              </div>
                <p class="perks-col-text">No commitment, cancel anytime. Never worry about forgetting a payment again!</p>
            </Col>
            <Col>
              <div class={props.perksCol3}>
                <p class="perks-col-line-break">___________</p>
                <h3 class="perks-col-title">Subscription Payment Model</h3>
              </div>
                <p class="perks-col-text">No commitment, cancel anytime. Never worry about forgetting a payment again!</p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}