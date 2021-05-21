import React from 'react'
import './main-landing.css';
import NavBar from "../NavBar";
import LargeTryItButton from "../buttons/LargeTryItButton"

export default function GetECNow() {
  return (
    // <div>
    <div class="get-ec-now-bg-color">
      <NavBar/>
      <div class="gen-section-wrapper">
      <div class="gen-text-wrapper">
          <h5 class="gen-title">GET EXP|CON NOW</h5>
        <p class="gen-text">Purchase and download the app.</p>
      </div>
      <div class="gen-try-it-btn">
        <LargeTryItButton/>
      </div>
      </div>
    </div>
    // </div>
  )
}