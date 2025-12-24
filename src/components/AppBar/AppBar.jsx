import { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";

import "./AppBar.css";

export default function AppBar() {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 60) {
        setHidden(true); // scrolling down
      } else {
        setHidden(false); // scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <Navbar
      fixed="top"
      className={`appbar ${hidden ? "appbar--hidden" : ""}`}
    >
      <Container className="appbar__container">
        <Nav className="appbar__nav">

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

          <Navbar.Brand className="appbar__brand">
            Williams Inc.
          </Navbar.Brand>

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
      </Container>
    </Navbar>
  );
}
