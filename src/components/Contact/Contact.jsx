import { GeoFill, TelephoneFill, EnvelopeFill, Facebook, Whatsapp, Instagram } from 'react-bootstrap-icons';
import { Container, Row, Col } from 'react-bootstrap';
import Map from '../Map/Map';
import './Contact.css';

export default function Contact() {
  return (
      <Container fluid className="contact-container">
        <Row>
          {/* Left column */}
          <Col className="contact-info">
            <h2>Get In Touch</h2>
            <div className="contact-details">
              <p><GeoFill size={25} className='icon-contact'/>123 King St, Toronto, ON</p>
              <p><TelephoneFill size={25} className='icon-contact'/>(647)-333-5392</p>
              <p><EnvelopeFill size={25} className='icon-contact'/>business.williams.inc@gmail.com</p>
            </div>

            <div className="contact-hours">
              <h3>Hours of Operation</h3>
              <ul>
                <li>Mon–Fri: 9:00 AM – 6:00 PM</li>
                <li>Sat: Closed</li>
                <li>Sun: By Appointment Only</li>
              </ul>
            </div>

            <div className="contact-socials">
              <h3>Follow Us</h3>
              <div className="social-links">
                <a href="#" target="_blank" rel="noreferrer"><Facebook size={25} className='icon-socials'/></a>
                <a href="#" target="_blank" rel="noreferrer"><Whatsapp size={25} className='icon-socials'/></a>
                <a href="#" target="_blank" rel="noreferrer"><Instagram size={25} className='icon-socials'/></a>
              </div>
            </div>
          </Col>

          {/* Right column */}
          <Col className="contact-map">
            <Map />
          </Col>
        </Row>
      </Container>
  );
}
