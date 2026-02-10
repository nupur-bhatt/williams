import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Facebook, Instagram, TelephoneFill, EnvelopeFill } from "react-bootstrap-icons";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <Container >
        <Row className="footer-main">
       
          <Col md={3} className="footer-col">
            <h3 className="footer-logo">Williams Inc.</h3>
          </Col>

          {/* Services */}
          <Col md={3} className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><a href="/cleaning">Cleaning Services</a></li>
              <li><a href="/junk-removal">Junk Removal</a></li>
              <li><a href="/moving">Moving Services</a></li>
              <li><a href="/commercial">Commercial Services</a></li>
            </ul>
          </Col>

          {/* Company */}
          <Col md={3} className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/reviews">Reviews</a></li>
              <li><a href="/faq">FAQs</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </Col>

          {/* CTA / Contact */}
          <Col md={3} className="footer-col footer-cta">
            <h4>Get Started</h4>
            <p>Have questions or need a quote? </p>
            <p><TelephoneFill /> <a href="tel:+16135551234" className="phone-link">(647) 333-5392</a>
                <br/>
                 <EnvelopeFill /><a href="mailto:info@williamsinc.com" className="contact-link">info@williamsinc.com</a>
            </p>
            <a className="footer-btn" href="/book">
              Book NOW
            </a>
            
          </Col>
        </Row>

        {/* Bottom Bar */}
        <Row className="footer-bottom mt-4">
            <hr/>
            <Col>
            <div className="footer-socials">
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook />
              </a>
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram />
              </a>
            </div>
            </Col>
          <Col className="text-end">
            <p>© {new Date().getFullYear()} Williams Inc. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
