import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
import './AppBar.css';

function AppBar() {
  return (
    <Navbar expand="lg" className="appbar">
      <Container className="appbar__container">
        <Navbar.Brand href="#home" className="appbar__brand">
          Williams Inc.
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="">
          
          <Nav className="me-auto appbar__nav">

            <Nav.Link
              as={NavLink}
              to="/"
              className="appbar__link"
            >
              Home
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/services"
              className="appbar__link"
            >
              Services
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/book"
              className="appbar__link"
            >
              Book
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/contact"
              className="appbar__link"
            >
              Contact
            </Nav.Link>

          </Nav>
  
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppBar;