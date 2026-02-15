import { Container, Row, Col, Button, ListGroup, Image, Card } from "react-bootstrap";
import {
  Trash,
  HouseDoor,
  Building,
  Recycle,
  CheckCircleFill
} from "react-bootstrap-icons";
import cleaning_intro_img from "../../assets/images/jonathan-cosens-photography-kFP7tQSL36w-unsplash.jpg";
import cleaning_included_img from "../../assets/images/pexels-cottonbro-9222630.jpg";
import "./Cleaning.css";

export default function JunkRemoval() {
  return (
    <Container fluid className="g-0 cleaning-page expand-align">

      {/* Hero */}
      <Row className="g-0 cleaning-hero text-center">
        <Col>
          <h1>Professional Junk Removal Services</h1>
          <p className="cleaning_p">
            Fast, reliable junk removal for homes and businesses. Whether you're
            clearing out old furniture, renovation debris, or unwanted clutter,
            our team handles the heavy lifting and responsible disposal for you.
          </p>

          <Row className="justify-content-center g-0">
            <Col xs="auto">
              <Button href="/book" className="cleaning-btn">Schedule Pickup</Button>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Overview */}
      <Row className="g-0 align-expand ">
        <Container fluid className="cleaning-subintro reduce_width_80">
          <Row className="g-0 mx-auto ">
          <Col md={6} className="padding_2rem_img align-content-center">
            <h2 className="cleaning_h2">Quick & Hassle-Free Junk Removal</h2>
            <p className="cleaning_p py-2">
              We provide efficient junk hauling services designed to save you time
              and effort. Our team arrives on time, removes unwanted items safely,
              and ensures proper disposal, recycling, or donation whenever possible.
            </p>
          </Col>
          <Col md={6}>
            <Image src={cleaning_intro_img} className="cleaning_intro_img"/>
          </Col>
          </Row>
        </Container>
      </Row>

      {/* Types */}
      <Row className="g-0 align-expand">
        <Container fluid className="g-0 reduce_width_90">
          <Row className="g-0 align-content-center text-center">
            <h2 className="cleaning_h2">Our Junk Removal Services</h2>
            <p className="cleaning_p">
              Comprehensive removal solutions for residential and commercial needs.
            </p>
     

        <Row className="g-0">
      
        <Col md={4}>
        <Card className="service-card">
          <Card.Body>
            <HouseDoor className="service-icon" />
            <Card.Title className="cleaning_h5">Residential Cleanouts</Card.Title>
            <Card.Text className="cleaning_p">
              Remove old furniture, appliances, mattresses, and household clutter
              quickly and efficiently.
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>

         <Col md={4}>
        <Card className="service-card">
          <Card.Body>
            <Building className="service-icon" />
            <Card.Title className="cleaning_h5">Commercial Junk Removal</Card.Title>
            <Card.Text className="cleaning_p">
              Office cleanouts, warehouse debris, and bulk item removal with minimal
              disruption to your operations.
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>

        <Col md={4}>
          <Card className="service-card">
            <Card.Body>
              <Recycle className="service-icon" />
              <Card.Title className="cleaning_h5">Eco-Friendly Disposal</Card.Title>
              <Card.Text className="cleaning_p">
                Responsible sorting, recycling, and donation practices to reduce
                landfill waste whenever possible.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
        </Row>
        </Container>
      </Row>

      {/* What's Included */}
      <Row className="g-0 align-expand text-start">
        <Container fluid className="included_container reduce_width_80">
          <Row className="g-0 mx-auto ">
            <Col md={6}>
              <Image src={cleaning_included_img} className="included_img"/>
            </Col>
            <Col md={6} className="align-content-center included_container">
              <h2 className="cleaning_h2">What’s Included</h2>
              <ListGroup className="included-list">

                <ListGroup.Item className="d-flex align-items-center">
                  <CheckCircleFill className="check-icon me-2" />
                  Full-service hauling and heavy lifting
                </ListGroup.Item>

                <ListGroup.Item className="d-flex align-items-center">
                  <CheckCircleFill className="check-icon me-2" />
                  Furniture, appliance, and mattress removal
                </ListGroup.Item>

                <ListGroup.Item className="d-flex align-items-center">
                  <CheckCircleFill className="check-icon me-2" />
                  Construction and renovation debris removal
                </ListGroup.Item>

                <ListGroup.Item className="d-flex align-items-center">
                  <CheckCircleFill className="check-icon me-2" />
                  Garage, attic, and basement cleanouts
                </ListGroup.Item>

                <ListGroup.Item className="d-flex align-items-center">
                  <CheckCircleFill className="check-icon me-2" />
                  Responsible disposal and recycling
                </ListGroup.Item>

                <ListGroup.Item className="d-flex align-items-center">
                  <CheckCircleFill className="check-icon me-2" />
                  Final sweep and cleanup of the area
                </ListGroup.Item>

              </ListGroup>
            </Col>
          </Row>
        </Container>
      </Row>


      {/* Process */}
      <Container fluid className="g-0 align-expand included_container">

      <Row className="g-0">
        <Row className="text-center">
          <h2 className="cleaning_h2">Our Junk Removal Process</h2>
        </Row>

        <Row className="g-0 steps_working">
        <Col md={3}>
        <Card className="working_card">
          <h6>1. Request a Quote</h6>
          <p>Tell us what needs to be removed and receive transparent pricing.</p>
          </Card>
        </Col>

        <Col md={3}>
        <Card className="working_card">
          <h6>2. Schedule Pickup</h6>
          <p>Choose a convenient time for our team to arrive.</p>
          </Card>
        </Col>
        

        <Col md={3}>
        <Card className="working_card">
          <h6>3. We Remove & Haul</h6>
          <p>Our crew handles all lifting, loading, and transportation.</p>
          </Card>
        </Col>

        <Col md={3}>
        <Card className="working_card">
          <h6>4. Responsible Disposal</h6>
          <p>We sort, recycle, donate, and dispose of items properly.</p>
          </Card>
        </Col>
      </Row>
      </Row>
      </Container>

      {/* CTA */}
      <Row className="g-0 cleaning-cta text-center">
        <Col>
          <h2>Ready to Clear the Clutter?</h2>
          <Button href="/book" className="cleaning-btn btn-quote">Get a Free Quote</Button>
        </Col>
      </Row>

    </Container>
  );
}
