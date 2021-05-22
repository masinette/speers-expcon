import React from 'react'
import './main-landing.css';
import NavBar from "../NavBar";
import { Container, Row, Col } from "react-bootstrap";
import SeeDemoButton from "../buttons/SeeDemoButton";
import CirclePresentationButton from "../buttons/CirclePresentationButton";

export default function FrontRowSeats(props) {
  return (
    <div class="front-row-seats-wrapper">
      <div class="front-row-seats-bg-color">
        <NavBar button={props.button}/>
        <Container>
          <Row>
            <Col>
              <div class="fr-image-circle-wrapper">
                <div class="circle-reveal-button">
                  <CirclePresentationButton text={"Reveal"}/>
                </div>
              </div>
            </Col>
            <Col>
              <div class="fr-text-wrapper">
                <h5 class="fr-title">FRONT ROW SEATS</h5>
                <p class="fr-text">Experience concerts up close and personal.</p>
                <SeeDemoButton textColor="front-row-seats-color" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

