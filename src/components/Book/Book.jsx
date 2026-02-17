import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  FloatingLabel
} from "react-bootstrap";
import {
  ShieldCheck,
  Clock,
  CashStack,
  CalendarCheck,
  CheckCircleFill
} from "react-bootstrap-icons";
import { useForm } from "react-hook-form";
import { Alert } from "react-bootstrap";
import { useState } from "react";
import "./Book.css";

export default function Book() {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();
    const [showAlert, setShowAlert] = useState(false);

    const onSubmit = (data) => {
        console.log(data);
        setShowAlert(true);
        reset();
    };

  return (
    <Container fluid className="booking-page g-0">

      {/* HERO */}
      <Row className="booking-hero text-center align-items-center justify-content-center g-0">
        <Col md={8}>
          <h1>Book Your Service</h1>
          <p className="booking-sub">
            Schedule professional cleaning, moving, or junk removal in just a few simple steps.
            Fast response. Transparent pricing. Reliable results.
          </p>
        </Col>
      </Row>

      {/* TRUST BAR */}
      <Row className="trust-bar text-center g-0">
        <Col md={3}>
          <ShieldCheck className="trust-icon" />
          <p>Fully Insured Professionals</p>
        </Col>
        <Col md={3}>
          <Clock className="trust-icon" />
          <p>Fast Response Within 24 Hours</p>
        </Col>
        <Col md={3}>
          <CashStack className="trust-icon" />
          <p>Transparent, Upfront Pricing</p>
        </Col>
        <Col md={3}>
          <CalendarCheck className="trust-icon" />
          <p>Flexible Scheduling</p>
        </Col>
      </Row>

      {/* BOOKING FORM */}
      <Row className="justify-content-center booking-form-section g-0">
        <Col md={8} lg={7}>
          <Card className="booking-card">
            <Card.Body>
              <h3 className="text-center mb-4">Service Request Form</h3>

                {showAlert && (
                <Alert
                    variant="success"
                    onClose={() => setShowAlert(false)}
                    className="alert-success"
                    dismissible>
                    Your service request has been submitted successfully!
                </Alert>
                )}

              <Form onSubmit={handleSubmit(onSubmit)}>

                <Row>
                    <Col md={6}>
                    <Form.Group className="mb-3">
                        <FloatingLabel label="Full Name">
                        <Form.Control
                            type="text"
                            placeholder="Enter your name"
                            isInvalid={!!errors.fullName}
                            {...register("fullName", {
                            required: "Full Name is required"
                            })}
                        />
                        </FloatingLabel>
                        <Form.Control.Feedback type="invalid">
                        {errors.fullName?.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                    </Col>

                    <Col md={6}>
                    <Form.Group className="mb-3">
                        <FloatingLabel label="Phone Number">
                        <Form.Control
                            type="tel"
                            placeholder="Enter your phone number"
                            isInvalid={!!errors.phone}
                            {...register("phone", {
                            required: "Phone number is required",
                            pattern: {
                                value: /^[0-9]+$/,
                                message: "Numbers only"
                            }
                            })}
                        />
                        </FloatingLabel>
                        <Form.Control.Feedback type="invalid">
                        {errors.phone?.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                    </Col>
                    
                </Row>

                <Row>

                    <Col md={12}>
                    <Form.Group className="mb-3">
                        <FloatingLabel label="Email">
                        <Form.Control
                            type="email"
                            placeholder="Enter your email"
                            isInvalid={!!errors.email}
                            {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^\S+@\S+\.\S+$/,
                                message: "Invalid email format"
                            }
                            })}
                        />
                        </FloatingLabel>
                        <Form.Control.Feedback type="invalid">
                        {errors.email?.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                    </Col>
                </Row>

                <Row>

                    <Col md={6}>
                    <Form.Group className="mb-3">
                        <FloatingLabel label="Service Type">
                        <Form.Select
                            isInvalid={!!errors.serviceType}
                            {...register("serviceType", {
                            required: "Please select a service"
                            })}
                        >
                            <option value="">Select a service</option>
                            <option>Cleaning</option>
                            <option>Moving</option>
                            <option>Junk Removal</option>
                        </Form.Select>
                        </FloatingLabel>
                        <Form.Control.Feedback type="invalid">
                        {errors.serviceType?.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                    </Col>

                    <Col md={6}>
                    <Form.Group className="mb-3">
                        <FloatingLabel label="Property Type">
                        <Form.Select
                            isInvalid={!!errors.propertyType}
                            {...register("propertyType", {
                            required: "Please select property type"
                            })}
                        >
                            <option value="">Select property type</option>
                            <option>Residential</option>
                            <option>Commercial</option>
                        </Form.Select>
                        </FloatingLabel>
                        <Form.Control.Feedback type="invalid">
                        {errors.propertyType?.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                    </Col>

                    
                </Row>

                <Row>

                    <Col md={6}>
                    <Form.Group className="mb-3">
                        <FloatingLabel label="Preferred Date">
                        <Form.Control
                            type="date"
                            isInvalid={!!errors.date}
                            {...register("date", {
                            required: "Please select a date"
                            })}
                        />
                        </FloatingLabel>
                        <Form.Control.Feedback type="invalid">
                        {errors.date?.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                    </Col>

                    <Col md={6}>
                    <Form.Group className="mb-3">
                        <FloatingLabel label="Preferred Time">
                        <Form.Select
                            isInvalid={!!errors.time}
                            {...register("time", {
                            required: "Please select a time range"
                            })}
                        >
                            <option value="">Select time range</option>
                            <option>Morning (8AM – 12PM)</option>
                            <option>Afternoon (12PM – 4PM)</option>
                            <option>Evening (4PM – 8PM)</option>
                        </Form.Select>
                        </FloatingLabel>
                        <Form.Control.Feedback type="invalid">
                        {errors.time?.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                    </Col>

                    
                </Row>

                <Form.Group className="mb-4">
                    <FloatingLabel label="Address">
                    <Form.Control
                        type="text"
                        placeholder="Enter service address"
                        isInvalid={!!errors.address}
                        {...register("address", {
                        required: "Address is required"
                        })}
                    />
                    </FloatingLabel>
                    <Form.Control.Feedback type="invalid">
                    {errors.address?.message}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-4">
                    
                    <Form.Control
                        as="textarea"
                        rows={4}
                        placeholder="Tell us more about your project..."
                        isInvalid={!!errors.details}
                        {...register("details", {
                        required: "Please provide additional details"
                        })}
                    />
                    
                    <Form.Control.Feedback type="invalid">
                    {errors.details?.message}
                    </Form.Control.Feedback>
                </Form.Group>

                <Row className="justify-content-center">
                    <Col xs="auto">
                    <Button type="submit" className="booking-btn">
                        Request Service
                    </Button>
                    </Col>
                </Row>

                </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* WHAT HAPPENS NEXT */}
      <Row className="process-section text-center g-0">
        <Col>
          <h2>What Happens Next</h2>
        </Col>

        <Row className="justify-content-center mt-4 g-0">
          <Col md={3}>
            <Card className="process-card">
              <Card.Body>
                <h6>1. Submit Your Request</h6>
                <p>Complete the form with your service details.</p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3}>
            <Card className="process-card">
              <Card.Body>
                <h6>2. We Contact You</h6>
                <p>Our team reviews your request and responds within 24 hours.</p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3}>
            <Card className="process-card">
              <Card.Body>
                <h6>3. Confirm & Schedule</h6>
                <p>Finalize details and secure your service date.</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Row>

      

    </Container>
  );
}
