import React from 'react'
import { Button, Badge } from 'react-bootstrap';
import { useHistory, Link } from 'react-router-dom';
import "../buttons/tryItButton.css"

export default function TryItButtonWhite(props) {

  return (
    <div class="try-it-btn" >
      <Badge pill type="button" variant="light">
          <Link to="/pricing">Try It Now</Link>
      </Badge>
    </div>
  )
};