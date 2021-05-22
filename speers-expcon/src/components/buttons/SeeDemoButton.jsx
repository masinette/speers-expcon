import React from 'react'
import { Badge } from 'react-bootstrap';
import "../buttons/tryItButton.css"

export default function SeeDemoButton(props) {

  return (
    <div  class="try-it-btn" >
        <a href="/pricing" class="try-it-white-btn">
          <Badge pill type="button" variant="light" >See Demo</Badge>
        </a>
    </div>
  )
};