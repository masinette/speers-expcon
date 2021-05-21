import React from 'react'
import './main-landing.css';
import NavBar from "../NavBar";
import TryItButtonWhite from '../buttons/TryItButtonWhite';
import { Container, Row, Col } from "react-bootstrap";
import monitorImage1 from "../../images/SmallSpeaker1-03@2x.png";
import monitorImage2 from "../../images/SmallSpeaker2-03@2x.png";


export default function Reviews() {
  return (
    <div class="reviews-bg-color">
      <NavBar button={TryItButtonWhite}/>
      <div class="ss-wrapper">

      <NavBar button={TryItButtonWhite}/>

        <Container fluid>
          <Row>
            <Col>
              <div class="review-monitor-wrapper">
                <img class="review-monitor-top" src={monitorImage1} alt="speaker box" />
                <img class="review-monitor-bottom" src={monitorImage2} alt="speaker box" />
              </div>
            </Col>
            <Col>
              <div class="review-text-wrapper">
                <h5 class="ss-title"><p class="star-rating">&#x2605;&#x2605;&#x2605;&#x2605;&#x2605;</p>ARTIST</h5>
                <p class="ss-text">“Love it, it’s the Best.I can’t live without it!”</p>
              </div>
            </Col>
            <Col>
              <div class="review-text-wrapper">
                <h5 class="ss-title"><p class="star-rating">&#x2605;&#x2605;&#x2605;&#x2605;&#x2605;</p>PRODUCER</h5>
                <p class="ss-text">“Love it, it’s the Best.I can’t live without it!”</p>
              </div>
            </Col>
            <Col>
              <div class="review-text-wrapper">
                <h5 class="ss-title"><p class="star-rating">&#x2605;&#x2605;&#x2605;&#x2605;&#x2605;</p>MUSIC FAN</h5>
                <p class="ss-text">“Love it, it’s the Best.I can’t live without it!”</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>    </div>
  )
}