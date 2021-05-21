import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import TryItButton from "./buttons/TryItButton";


export default function NavBar() {
  return (
    <div>
<Navbar expand="lg" variant="dark">
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">


      <NavDropdown title="&#9776;" id="basic-nav-dropdown">
        <NavDropdown.Item as={Link} to="/">Home</NavDropdown.Item>
        <NavDropdown.Item class="primary-color" as={Link} to="/">What is it?</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/">Perks</NavDropdown.Item>
        <NavDropdown.Item as={Link} to="/pricing">Pricing</NavDropdown.Item>
      </NavDropdown>
      <Navbar.Brand as={Link} to="/">EXP|CON</Navbar.Brand>
    </Nav>
      <Navbar.Brand as={TryItButton}></Navbar.Brand>

  </Navbar.Collapse>
       {/* <Link to="/"><button type="button">Home</button></Link> */}
</Navbar>
    </div>
  )
};

