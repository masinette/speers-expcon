import React from 'react'
import { Button, Badge } from 'react-bootstrap';
import { useHistory, Link } from 'react-router-dom';
import "../buttons/tryItButton.css"

export default function TryItButton(props) {

  return (
    <div  class="try-it-btn" >
        <a href="speers-expcon/pricing" >
          <Badge pill type="button" variant="dark" >Try It Now</Badge>
        </a>
    </div>
  )
};