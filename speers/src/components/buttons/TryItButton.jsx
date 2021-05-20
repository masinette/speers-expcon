import React from 'react'
import { Button} from 'react-bootstrap';
import { useHistory, Link } from 'react-router-dom';

export default function TryItButton(props) {

  return (
    <Link to="/pricing">
      <Button type="button" variant="outline-success" >Try It Now!</Button>
    </Link>
  )
};