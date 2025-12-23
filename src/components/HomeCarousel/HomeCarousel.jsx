import Carousel from "react-bootstrap/Carousel";
import "./HomeCarousel.css";
import slide1 from "../../assets/images/office-cleaning.jpg";
import slide2 from "../../assets/images/solution-cleaning.jpg";
import slide3 from "../../assets/images/spot-cleaning.jpg";

export default function HomeCarousel() {

  const heading="Professional Cleaning Services You Can ";
  const boldHeading = "Trust";
  const tagline1="Williams Inc. provides reliable cleaning services for residential and commercial spaces.";
  const tagline2="Trusted quality. Consistent results."

  return (
  <section className="">
    
     <div className="carousel-gradient">
      <h1 className="gradient-text">
          {heading}<b className="bold-tagline">{boldHeading}</b>
      </h1>
      <p className="gradient-subtext">
        {tagline1}
        <br/>
        {tagline2}
      </p>
      
      <button className="gradient-button">
        Book Now
      </button>
    </div>

      <Carousel fade interval={10000} controls={false} indicators={false} className="home-carousel">
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

  </section>
  );
}
