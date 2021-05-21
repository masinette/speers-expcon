import React from 'react';
import TryItButton from "./buttons/TryItButton";
import Pricing from "./main-landing/Pricing";
import Perks from "./main-landing/Perks";
import Footer from "./main-landing/Footer";
import NavBar from "./NavBar";
import { Container, Row, Col, Badge } from "react-bootstrap";

export default function PricingPage() {

      return (
        <div>
          <div class="pricing-page-bg-color">
            <Pricing/>
          </div>
          <div class="pricing-perks-bg-color">
            <Perks />
            <Footer/>
          </div>
        </div>
    )
  };
  
  