import React from 'react'
import { Badge } from 'react-bootstrap';
import "../buttons/tryItButton.css";

export default function SeeDemoButton(props) {

  return (
    <div>
        <a href="/" class="try-it-white-btn">
          <div class="color-behind-btn">
            <Badge pill type="button" variant="light" >See Demo</Badge>
          </div>
        </a>
    </div>
  )
};