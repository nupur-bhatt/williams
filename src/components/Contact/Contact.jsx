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

  const details_title = "Contact Information";
  const address = "123 King St, Toronto, ON";
  const contact = "(647)-333-5392";
  const email = "business.williams.inc@gmail.com";
  const hours_title = "Hours of operation";


  return (
      <Container fluid className="g-0 contact-container">
        
          <Row className="g-0 contact-hero-container">
            <Col className="g-0" >
              <h1 className="contact-title">Get In Touch</h1>
              <p className="contact-subheading">
                We'd love to hear from you. Have questions or ready to get started?
                Reach out today and let’s make it happen!
              </p>
            </Col>
          </Row>
   
        <Container fluid className="contact-details-container">
        <Row className='g-0'>
          <Col xs={12} sm={12} md={12} lg={6} xl={6} >

            
              <Row className='g-0'><h1>{details_title}</h1></Row>
              <Row className='g-0 contact-details-row'>
                <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                    <GeoFill className='icon-details'/>
                </Col>
                <Col  className='contact-details-col'>
                  <Row className='g-0'><h5>Location</h5></Row>
                  <Row className='g-0'><h6>{address}</h6></Row>
                </Col>
              </Row>

              <Row className='g-0 contact-details-row'>
                <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                    <TelephoneFill className='icon-details'/>
                </Col>
                <Col className='contact-details-col'>
                  <Row className='g-0'><h5>Phone</h5></Row>
                  <Row className='g-0'><h6>{contact}</h6></Row>
                </Col>
              </Row>

              <Row className='g-0 contact-details-row'>
                <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                    <EnvelopeFill className='icon-details' />
                </Col>
                <Col className='contact-details-col'>
                  <Row className='g-0'><h5>Email</h5></Row>
                  <Row className='g-0'><h6>{email}</h6></Row>
                </Col>
              </Row>

            <Row className='g-0'>
            <Container fluid className='hours-container'>
            <Card className='hours-card'>
              <Card.Title><h1>{hours_title}</h1></Card.Title>
              <Card.Body>
                <Table striped className='hours-table'>
                  <tbody>
                    <tr className='weekday-hours-row'>
                      <td className='hours_heading'>Monday - Friday :</td>
                      <td>9:00 AM - 6:00PM </td>
                    </tr>
                    <tr className='saturday-hours-row'>
                      <td className='hours_heading'>Saturday :</td>
                      <td>Closed </td>
                    </tr>
                    <tr className='sunday-hours-row'>
                      <td className='hours_heading'>Sunday :</td>
                      <td>By Appointment Only </td>
                    </tr>
                     
                  </tbody>
                </Table>
            </Card.Body>
          </Card>
          </Container>
          </Row>

           
        </Col>




          <Col xs={12} sm={12} md={12} lg={6} xl={6}>
          <Container fluid className='contact-form-container'>
          <Row className='g-0'>
          
              <Row className='g-0'><h1>Contact Us</h1></Row>
              <Row className='g-0'>
                <h6>Let us make your space shine! <br/> Fill out the form below and we'll get back to you as soon as. possible</h6>
              </Row>

              <Form>
                  <Row className='g-0'>
                    
                      <FloatingLabel controlId='fullNameTextArea' label="Full Name" className='contact-floating-label'>
                        <Form.Control type="text" placeholder="Full Name" className='contact-form-control'/>
                      </FloatingLabel> 
                
                      <FloatingLabel controlId='addressTextArea' label="Address" className='contact-floating-label'>
                        <Form.Control type="text" placeholder="Address" className='contact-form-control'/>
                      </FloatingLabel> 
           
                      <FloatingLabel controlId='phoneNumberTextArea' label="Phone Number" className='contact-floating-label'>
                        <Form.Control type="text" placeholder="Phone Number" className='contact-form-control'/>
                      </FloatingLabel> 
                    
                      <FloatingLabel controlId='emailTextArea' label="Email" className='contact-floating-label'>
                        <Form.Control type="email" placeholder="Email" className='contact-form-control'/>
                      </FloatingLabel> 
                  
                      <Form.Control as="textarea" rows={4} placeholder="Message" className='contact-textarea-form-control'/>
               
                      <Button type="submit" className='g-4 contact-form-submit'>
                        Submit
                      </Button>
           
                 </Row>
              </Form>       
            
          </Row>
          </Container>
          <Col>
          </Col>
          </Col>
        </Row>

        <Row className='g-0 icon-row'>
              <h1>Follow Us</h1>
              <Col className=" justify-content-start">
                  <Button className='social-button'><Facebook size={30} className='icon-socials'/></Button>
                  <Button className='social-button'><Instagram size={30} className='icon-socials'/></Button>
              </Col>
          </Row>


        </Container>
         
      </Container>
  );
}
