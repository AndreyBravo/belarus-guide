import React from "react";

import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

function BNavbar() {
  return (
    <Navbar collapseOnSelect bg="light" variant="light" expand="lg">
      <Container>
        <Link to="/">
          <Navbar.Brand>Гид по Беларуси</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">
              Главное
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              События
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BNavbar;
