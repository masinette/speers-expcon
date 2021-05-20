import React from 'react'
import TryItButton from "../buttons/TryItButton";
import Hero  from "../main-landing/Hero"
import SuperiorSound  from "../main-landing/SuperiorSound"
import FrontRowSeats  from "../main-landing/FrontRowSeats"
import Perks  from "../main-landing/Perks"
import Reviews  from "../main-landing/Reviews"
import GetECNow  from "../main-landing/GetECNow"
import './main-landing.css';


export default function Main(props) {
  return (
    <div>
      <p>MAIN</p>
      {/* <TryItButton handleClick={props.handleClick}/> */}
      <Hero />
      <SuperiorSound />
      <FrontRowSeats />
      <Perks />
      <Reviews />
      <GetECNow />
    </div>
  )
};

