import React from 'react';
import $ from 'jquery';
import { findDOMNode } from "react-dom";

import './main-landing.css';
import NavBar from "../NavBar";
import { Container, Row, Col } from "react-bootstrap";
import SeeDemoButton from "../buttons/SeeDemoButton";
import CirclePresentationButton from "../buttons/CirclePresentationButton";

export default function FrontRowSeats(props) {

  $("button").click(function(){
    $.get("demo_test.asp", function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
    });
});

  return (
    <div class="front-row-seats-wrapper">
      <div class="front-row-seats-bg-color">
        <NavBar button={props.button}/>
        <Container fluid>
          <Row>
            <Col>
              <div class="fr-image-circle-wrapper">
                <div class="fr-image-circle-top"></div>
                <div class="fr-image-circle-middle">
                  <CirclePresentationButton text={"Reveal"}/>
                </div>
                <div class="fr-image-circle-bottom"></div>
              </div>
            </Col>
            <Col>
              <div class="fr-text-wrapper">
                <h5 class="fr-title">FRONT ROW SEATS</h5>
                <p class="fr-text">Experience concerts up close and personal.</p>
                <SeeDemoButton textColor="front-row-seats-color" />
              </div>
              <button>Test Scratch</button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

