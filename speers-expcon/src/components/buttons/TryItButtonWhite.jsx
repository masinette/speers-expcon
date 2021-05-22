import React from 'react'
import { Button, Badge } from 'react-bootstrap';
import { useHistory, Link } from 'react-router-dom';
import "../buttons/tryItButton.css"

export default function TryItButtonWhite(props) {

  return (
    <div class="try-it-btn" >
      <Link to="/pricing">
        <Badge pill type="button" variant="light">
          <span class={props.textColor}>Try It Now</span>
        </Badge>
      </Link>
    </div>
  )
};