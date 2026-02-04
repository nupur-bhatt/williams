import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from "react-router-dom";
import './AppBar.css';

function AppBar() {
  return (
    <Navbar collapseOnSelect expand="lg" data-bs-theme="dark" className="appbar" >
      
      <Container>
        <Navbar.Brand href="#home" className="appbar__brand">Williams Inc.</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="appbar__toggle" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto appbar__nav">
            <Nav.Link as={NavLink} to="/" href="#/" className="appbar__link">Home</Nav.Link>
            <NavDropdown as={NavLink} to="/services" href="#services" title="services" color='primary' className="appbar__link">
              <NavDropdown.Item as={NavLink} to="services/cleaning" href="#cleaning" className="appbar__dropdown__item">cleaning</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="services/moving" href="#moving" className="appbar__dropdown__item">moving</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="services/junkremoval" href="#junkremoval" className="appbar__dropdown__item">junk removal</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={NavLink} to="/book" href="#book" className="appbar__link">Book</Nav.Link>
            <Nav.Link as={NavLink} to="/contact" href="#contact" className="appbar__link">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      
    </Navbar>
  );
}

export default AppBar;