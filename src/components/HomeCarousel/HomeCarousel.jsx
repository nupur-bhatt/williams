import Carousel from "react-bootstrap/Carousel";
import Container from 'react-bootstrap/Container';
import slide1 from "../../assets/images/office-cleaning.jpg";
import slide2 from "../../assets/images/solution-cleaning.jpg";
import slide3 from "../../assets/images/spot-cleaning.jpg";
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { TelephoneFill, Calendar2EventFill } from "react-bootstrap-icons";
import "./HomeCarousel.css";

export default function HomeCarousel() {

  const heading="Professional Cleaning Services You Can ";
  const boldHeading = "Trust";
  const tagline1="Williams Inc. provides reliable cleaning services for residential and commercial spaces.";
  const tagline2="Trusted quality. Consistent results.";
  const about = "About Us";

  return (
  <Container fluid className="g-0 parent__container">
     <Container fluid className="g-0 carousel-gradient">
          
        <h1 className="gradient-text">
            {heading}<b className="bold-tagline">{boldHeading}</b>
        </h1>
        <h6 className="gradient-subtext">
            {tagline1}
            <br/>
            {tagline2}
        </h6>
        <Button as="a" href="/book" className="gradient-button-schedule">
        <Calendar2EventFill size={25} /> Schedule Service
        </Button>
        
        <Button as="a" href="tel:+16473335392" className="gradient-button-call">
        <TelephoneFill size={25} /> Contact Us
        </Button>
          
      </Container>
      <Container fluid className="g-0 carousel-container">
      <Carousel fade interval={10000} controls={false} indicators={false} >
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={slide1}
            alt="Slide 1"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={slide2}
            alt="Slide 2"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={slide3}
            alt="Slide 3"
          />
        </Carousel.Item>  
      </Carousel>
      </Container>
  </Container>
  );
}
