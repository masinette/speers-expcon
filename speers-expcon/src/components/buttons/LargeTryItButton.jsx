import React from 'react'
import { Button, Badge } from 'react-bootstrap';
import { useHistory, Link } from 'react-router-dom';
import "../buttons/tryItButton.css"

export default function LargeTryItButton(props) {

  return (
    <div  class="try-it-btn" >
        <a href="pricing" >
          <Badge pill type="button" variant="lg-dark" >Try It Now</Badge>
        </a>
    </div>
  )
};