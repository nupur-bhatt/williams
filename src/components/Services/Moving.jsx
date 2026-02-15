import { Container, Row, Col, Button, ListGroup, Image, Card, CardHeader } from "react-bootstrap";
import {
  HouseDoor,
  Building,
  BoxSeam,
  CheckCircleFill
} from "react-bootstrap-icons";
import cleaning_intro_img from "../../assets/images/pexels-rdne-7464430.jpg";
import cleaning_included_img from "../../assets/images/pexels-rdne-7464674.jpg";
import "./Cleaning.css";

export default function Cleaning() {
  return (
    <Container fluid className="g-0 cleaning-page expand-align">

      {/* Hero */}
      <Row className="g-0 cleaning-hero text-center">
        <Col>
          <h1>Professional Moving Services for Homes & Businesses</h1>
          <p className="cleaning_p">
            Our experienced moving team provides reliable, efficient relocation services
            for residential and commercial clients. Whether you're moving locally or
            across the city, we handle your belongings with care and precision from
            start to finish.
          </p>

          <Row className="justify-content-center g-0">
            <Col xs="auto">
              <Button href="/book" className="cleaning-btn">Book Your Move</Button>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Overview */}
      <Row className="g-0 align-expand ">
        <Container fluid className="cleaning-subintro reduce_width_80">
          <Row className="g-0 mx-auto ">
          <Col xs={12} sm={12} md={6} lg={6} xl={6} className="padding_2rem_img align-content-center">
            <h2 className="cleaning_h2">Reliable & Efficient Relocation</h2>
            <p className="cleaning_p py-2">
              We provide structured, stress-free moving services designed to protect
              your belongings and streamline your transition. From careful packing
              to secure transportation, our team ensures a smooth moving experience.
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
            <h2 className="cleaning_h2">Our Moving Services</h2>
            <p className="cleaning_p">
              Flexible moving solutions tailored to your specific relocation needs.
            </p>
     

        <Row className="g-0">
      
        <Col md={4}>
        <Card className="service-card ">
          <Card.Body>
            <Building className="service-icon" />
            <Card.Title className="cleaning_h5">Commercial Moving</Card.Title>
            <Card.Text className="cleaning_p">
              Efficient office and commercial relocations with minimal disruption
              to your operations and workflow.
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>

         <Col md={4}>
        <Card className="service-card ">
          <Card.Body>
            <HouseDoor className="service-icon" />
            <Card.Title className="cleaning_h5">Residential Moving</Card.Title>
            <Card.Text className="cleaning_p">
              Safe and careful home moving services designed to protect your
              furniture, appliances, and personal belongings.
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>

        <Col md={4}>
          <Card className="service-card ">
            <Card.Body>
              <BoxSeam className="service-icon" />
              <Card.Title className="cleaning_h5">Packing & Unpacking</Card.Title>
              <Card.Text className="cleaning_p">
                Professional packing services using quality materials to ensure
                your items arrive securely and intact.
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
                  Careful loading and unloading of all items
                </ListGroup.Item>

                <ListGroup.Item className="d-flex align-items-center">
                  <CheckCircleFill className="check-icon me-2" />
                  Protective wrapping for furniture and fragile items
                </ListGroup.Item>

                <ListGroup.Item className="d-flex align-items-center">
                  <CheckCircleFill className="check-icon me-2" />
                  Disassembly and reassembly of furniture
                </ListGroup.Item>

                <ListGroup.Item className="d-flex align-items-center">
                  <CheckCircleFill className="check-icon me-2" />
                  Secure transportation with equipped moving trucks
                </ListGroup.Item>

                <ListGroup.Item className="d-flex align-items-center">
                  <CheckCircleFill className="check-icon me-2" />
                  Organized placement of items at your new location
                </ListGroup.Item>

                <ListGroup.Item className="d-flex align-items-center">
                  <CheckCircleFill className="check-icon me-2" />
                  Final walkthrough to ensure satisfaction
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
          <h2 className="cleaning_h2">Our Moving Process</h2>
        </Row>

        <Row className="g-0 steps_working">
        <Col md={3}>
        <Card className="working_card">
          <h6>1. Consultation</h6>
          <p>Discuss your moving details, inventory, and preferred timeline.</p>
          </Card>
        </Col>

        <Col md={3}>
        <Card className="working_card">
          <h6>2. Planning & Scheduling</h6>
          <p>We coordinate logistics and confirm your moving date.</p>
          </Card>
        </Col>
        

        <Col md={3}>
        <Card className="working_card">
          <h6>3. Moving Day</h6>
          <p>Our professional movers handle packing, loading, and transport.</p>
          </Card>
        </Col>

        <Col md={3}>
        <Card className="working_card">
          <h6>4. Delivery & Setup</h6>
          <p>We unload, place items as directed, and complete a final walkthrough.</p>
          </Card>
        </Col>
      </Row>
      </Row>
      </Container>

      {/* CTA */}
      <Row className="g-0 cleaning-cta text-center">
        <Col>
          <h2>Ready to Make Your Move?</h2>
          <Button href="/book" className="cleaning-btn btn-quote">Get a free Quote</Button>
        </Col>
      </Row>

    </Container>
  );
}
