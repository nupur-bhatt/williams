import { Container, Row, Col, Button, ListGroup, Image, Card, CardHeader } from "react-bootstrap";
import {
  HouseDoor,
  Building,
  BoxSeam,
  CheckCircleFill
} from "react-bootstrap-icons";
import cleaning_intro_img from "../../assets/images/vitaly-gariev-ViXT4S89hS0-unsplash.jpg";
import cleaning_included_img from "../../assets/images/pexels-tima-miroshnichenko-6197108.jpg";
import "./Cleaning.css";

export default function Cleaning() {
  return (
    <Container fluid className="g-0 cleaning-page expand-align">

      {/* Hero */}
      <Row className="g-0 cleaning-hero text-center">
        <Col>
          <h1>Reliable Cleaning Solutions for Homes & Businesses</h1>
          <p className="cleaning_p">
            We provide thorough, detail-driven cleaning for residential and
            commercial spaces, designed to keep your environment clean,
            organized, and comfortable. From routine upkeep to deep cleans and
            move-in/move-out services, our professional crews deliver consistent
            results with care, reliability, and flexible scheduling.
          </p>

          <Row className="justify-content-center g-0">
            <Col xs="auto">
              <Button href="/book" className="cleaning-btn">Book Service</Button>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Overview */}
      <Row className="g-0 align-expand ">
        <Container fluid className="cleaning-subintro reduce_width_80">
          <Row className="g-0 mx-auto ">
          <Col xs={12} sm={12} md={6} lg={6} xl={6} className="padding_2rem_img align-content-center">
            <h2 className="cleaning_h2">What We Offer</h2>
            <p className="cleaning_p py-2">
              Our cleaning services are built for consistency, professionalism,
              and real results—whether you need a one-time clean or ongoing
              service.
            </p>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} xl={6} >
            <Image src={cleaning_intro_img} className="cleaning_intro_img"/>
          </Col>
          </Row>
        </Container>
      </Row>

      {/* Types */}
      <Row className="g-0 align-expand">
        <Container fluid className="g-0 reduce_width_90">
          <Row className="g-0 align-content-center text-center">
            <h2 className="cleaning_h2">Types of Cleaning</h2>
            <p className="cleaning_p">
            Explore our cleaning services below and find the right solution for your space.
          </p>
     

        <Row className="g-0">
      
        <Col md={4}>
        <Card className="service-card ">
          <Card.Body>
            <Building className="service-icon" />
            <Card.Title className="cleaning_h5">Commercial Cleaning</Card.Title>
            <Card.Text className="cleaning_p">
              Professional cleaning solutions for offices, retail spaces, and
              commercial properties of all sizes.
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>

         <Col md={4}>
        <Card className="service-card ">
          <Card.Body>
            <HouseDoor className="service-icon" />
            <Card.Title className="cleaning_h5">Residential Cleaning</Card.Title>
            <Card.Text className="cleaning_p">
              Reliable cleaning for homes, apartments, and condos—keeping your
              living space fresh, organized, and stress-free.
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>

        <Col md={4}>
          <Card className="service-card ">
            <Card.Body>
              <BoxSeam className="service-icon" />
              <Card.Title className="cleaning_h5">Move-In / Move-Out</Card.Title>
              <Card.Text className="cleaning_p">
                Detailed cleaning designed to prepare properties for new occupants
                or final inspections.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
        </Row>
        </Container>
      </Row>

      <Row className="g-0 align-expand text-start">
        <Container fluid className="included_container reduce_width_80">
          <Row className="g-0 mx-auto ">
            <Col xs={12} sm={12} md={6} lg={6} xl={6} >
            <Image src={cleaning_included_img} className="included_img"/>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} xl={6} className="align-content-center included_container">
            <h2 className="cleaning_h2">What’s Included</h2>
            <p className="cleaning_p py-2">
              <ListGroup className="included-list">
                <ListGroup.Item className="d-flex align-items-center">
                  <CheckCircleFill className="check-icon me-2" />
                  Vacuuming, sweeping, and mopping
                </ListGroup.Item>

                <ListGroup.Item className="d-flex align-items-center">
                  <CheckCircleFill className="check-icon me-2" />
                  Dusting surfaces and baseboards
                </ListGroup.Item>

                <ListGroup.Item className="d-flex align-items-center">
                  <CheckCircleFill className="check-icon me-2" />
                  Kitchen cleaning and wipe-downs
                </ListGroup.Item>

                <ListGroup.Item className="d-flex align-items-center">
                  <CheckCircleFill className="check-icon me-2" />
                  Bathroom sanitization
                </ListGroup.Item>

                <ListGroup.Item className="d-flex align-items-center">
                  <CheckCircleFill className="check-icon me-2" />
                  Trash removal
                </ListGroup.Item>

                <ListGroup.Item className="d-flex align-items-center">
                  <CheckCircleFill className="check-icon me-2" />
                  General tidying and finishing touches
                </ListGroup.Item>
              </ListGroup>
            </p>
          </Col>
          
          </Row>
        </Container>
      </Row>


      {/* Process */}
      <Container fluid className="g-0 align-expand included_container">

      <Row className="g-0 ">
        <Row className="text-center">
          <h2 className="cleaning_h2">How It Works</h2>
        </Row>

        <Row className="g-0 steps_working">
        <Col md={3}>
        <Card className="working_card">
          <h6>1. Request a Quote</h6>
          <p>Tell us about your space and cleaning needs.</p>
          </Card>
        </Col>

        <Col md={3}>
        <Card className="working_card">
          <h6>2. Schedule</h6>
          <p>We confirm details and book a time that works for you.</p>
          </Card>
        </Col>
        

        <Col md={3}>
        <Card className="working_card">
          <h6>3. Cleaning Day</h6>
          <p>Our professional crew arrives ready to work.</p>
          </Card>
        </Col>

        <Col md={3}>
        <Card className="working_card">
          <h6>4. Final Check</h6>
          <p>We ensure everything meets our quality standards.</p>
          </Card>
        </Col>
      </Row>
      </Row>
      </Container>

      {/* CTA */}
      <Row className="g-0 cleaning-cta text-center">
        <Col>
          <h2>Ready to Book Your Cleaning?</h2>
          <Button href="/book" className="cleaning-btn btn-quote">Request a Free Quote</Button>
        </Col>
      </Row>

    </Container>
  );
}

