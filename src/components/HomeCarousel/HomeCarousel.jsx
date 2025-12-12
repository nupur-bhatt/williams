import React from "react";
import { Carousel } from "react-bootstrap";
import "./HomeCarousel.css";

export default function HomeCarousel() {
  return (
    <Carousel controls={false} indicators={false} fade interval={4000}>
      <Carousel.Item>
        <div className="carousel-img img1"></div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="carousel-img img2"></div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="carousel-img img3"></div>
      </Carousel.Item>
    </Carousel>
  );
}
