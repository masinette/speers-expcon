import React from 'react';
import './main-landing.css';
import NavBar from "../NavBar";
import CirclePresentationButton from "../buttons/CirclePresentationButton";
import TryItButtonWhite from "../buttons/TryItButtonWhite";
import SeeDemoButton from "../buttons/SeeDemoButton";
import { Container, Row, Col } from "react-bootstrap";
import speakerImage from "../../images/medium17.png";



export default function SuperiorSound() {
  return (
    
    <div class="superior-sound-bg-color">
      <div class="ss-wrapper">

      <NavBar button={TryItButtonWhite}/>

        <Container>
          <Row>
            <Col>
              <div class="ss-text-wrapper">
                <h5 class="ss-title">SUPERIOR SOUND</h5>
                <p class="ss-text">Experience live versions of your favourite songs.</p>
                <SeeDemoButton/>
              </div>
            </Col>
            <Col>
              <div class="ss-speaker-wrapper">
                <img class="ss-speaker-left" src={speakerImage} alt="speaker box" />
                <img class="ss-speaker-right" src={speakerImage} alt="speaker box" />
                <CirclePresentationButton/>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

    </div>
  )
}