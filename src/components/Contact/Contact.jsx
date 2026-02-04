import { GeoFill, TelephoneFill, EnvelopeFill, Facebook, Whatsapp, Instagram } from 'react-bootstrap-icons';
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Map from '../Map/Map';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import './Contact.css';

export default function Contact() {

  const details_title = "Get in touch";
  const address = "123 King St, Toronto, ON";
  const contact = "(647)-333-5392";
  const email = "business.williams.inc@gmail.com";
  const hours_title = "Hours of operation";
  const hours_weekdays = "Mon-Fri: 9:00 AM - 6:00 PM";
  const hours_sat = "Saturday: Closed";
  const hours_sun = "Sunday: By Appointment Only";
  const follow_title = "Follow us";
  const follow_subtitle = "Keep up with the latest from us";

  return (
      <Container fluid className="g-0 contact-container">
        <Row className='g-4'>
          <Col xs={12} sm={12} md={12} lg={6} xl={6} >

            <Container fluid className="contact-details-container">
              
              <Row className='g-0'><h1>{details_title}</h1></Row>
              
              <Row className='g-0 contact-details-row'>
                <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                    <GeoFill className='icon-details' size={30}/>
                </Col>
                <Col  className='contact-details-col'>
                  <Row className='g-0'><h5>Our Location</h5></Row>
                  <Row className='g-0'><h6>{address}</h6></Row>
                </Col>
              </Row>

              <Row className='g-0 contact-details-row'>
                <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                    <TelephoneFill className='icon-details'/>
                </Col>
                <Col className='contact-details-col'>
                  <Row className='g-0'><h5>Contact Info</h5></Row>
                  <Row className='g-0'><h6>{contact}</h6></Row>
                </Col>
              </Row>

              <Row className='g-0 contact-details-row'>
                <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                    <EnvelopeFill className='icon-details' size={30}/>
                </Col>
                <Col className='contact-details-col'>
                  <Row className='g-0'><h5>Email</h5></Row>
                  <Row className='g-0'><h6>{email}</h6></Row>
                </Col>
              </Row>

              <Row className='g-2'>
                <Container fluid className="map-container">
              <Map />
            </Container>
              </Row>

              <Row className='g-2 icon-row'>
                <Col className="d-flex justify-content-end">
                    <Button className='social-button'><Facebook size={35} className='icon-socials'/></Button>
                    <Button className='social-button'><Whatsapp size={35} className='icon-socials'/></Button>
                    <Button className='social-button'><Instagram size={35} className='icon-socials'/></Button>
                </Col>
              </Row>
            </Container>
          </Col>


          <Col xs={12} sm={12} md={12} lg={6} xl={6}>
          
          <Row className='g-0'>
            <Container fluid className='hours-container'>
            <Card className='hours-card'>
              <Card.Title><h1>{hours_title}</h1></Card.Title>
              <Card.Body>
                <Table hover className='hours-table'>
                  <tbody>
                    <tr className='weekday-hours-row'>
                      <td>Monday - Friday :</td>
                      <td>9:00 AM - 6:00PM </td>
                    </tr>
                    <tr className='sunday-hours-row'>
                      <td>Sunday :</td>
                      <td>By Appointment Only </td>
                    </tr>
                     <tr className='saturday-hours-row'>
                      <td>Saturday :</td>
                      <td>Closed </td>
                    </tr>
                  </tbody>
                </Table>
            </Card.Body>
          </Card>
          </Container>
          </Row>

          <Row className='g-0'>
            <Container fluid className='contact-form-container'>

              <Row className='g-0'><h1>Contact Us</h1></Row>
              <Row className='g-0'>
                <h6>Let us make your space shine! <br/> Fill out the form below and we'll get back to you.</h6>
              </Row>

              <Form>
                  <Row className='g-2'>
                    <Col md>
                      <FloatingLabel controlId='fullNameTextArea' label="Full Name" className='contact-floating-label'>
                        <Form.Control type="text" placeholder="Full Name" className='contact-form-control'/>
                      </FloatingLabel> 
                 </Col>
                    <Col md>
                      <FloatingLabel controlId='addressTextArea' label="Address" className='contact-floating-label'>
                        <Form.Control type="text" placeholder="Address" className='contact-form-control'/>
                      </FloatingLabel> 
                    </Col>
                  </Row>
                  <Row className='g-2'>
                    <Col md>
                      <FloatingLabel controlId='phoneNumberTextArea' label="Phone Number" className='contact-floating-label'>
                        <Form.Control type="text" placeholder="Phone Number" className='contact-form-control'/>
                      </FloatingLabel> 
                      </Col>
                    <Col md>
                      <FloatingLabel controlId='emailTextArea' label="Email" className='contact-floating-label'>
                        <Form.Control type="email" placeholder="Email" className='contact-form-control'/>
                      </FloatingLabel> 
                    </Col>
                  </Row>
                  <Row className='g-2'>
                    <Col md>
                      <Form.Control as="textarea" rows={4} placeholder="Message" className='contact-textarea-form-control'/>
                      </Col>
                  </Row>
                 <Row className='g-0'>
                  <Col md>
                  <Button type="submit" className='g-4 contact-form-submit'>
                  Submit
                </Button>
                </Col>
                 </Row>
              </Form>       
            </Container>
          </Row>
          <Col>
          </Col>
          </Col>
        </Row>
      </Container>
  );
}
