import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./AppBar.css";

export default function AppBar() {
  return (
    <Navbar expand="lg" className="appbar" fixed="top">
      <Container>
        <Navbar.Brand href="#home" className="brand">
          Williams Inc.
        </Navbar.Brand>

        {/* No collapse → always visible */}
        <Nav className="ms-auto">
          <Nav.Link href="#services">Services</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
