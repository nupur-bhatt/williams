import { Container, Row, Col, Card, Image } from "react-bootstrap";
import cleaning_img from "../../assets/images/pexels-tima-miroshnichenko-6195951.jpg";
import moving_img from "../../assets/images/pexels-ketut-subiyanto-4246095.jpg";
import removal_img from "../../assets/images/pexels-akedynamic-5994772.jpg";
import ServiceCard from "../ServiceCard/ServiceCard";
import "./Services.css";
import { href } from "react-router-dom";

export default function Services(){

    const services_headline = "Services";

     const cleaning_service_card = {
        heading: "Cleaning",
        href:"/services/cleaning",
        image_alt: "man vacuuming"
    }
     const moving_service_card = {
        heading: "Moving",
        href:"/services/moving",
        image_alt: "man packing boxes"
    }
     const junk_removal_service_card = {
        heading: "Junk Removal",
        href:"/services/junkremoval",
        image_alt: "black garbage bag"
    }

    return(
        <Container fluid className="g-0 services_container">
            
            {/* <Row><h2 className="services_heading">{services_headline}</h2></Row> */}
            
            <Row className="g-0 services_row">
                <Col xs={12} sm={12} md={4} lg={4} xl={4} className="p-2">
                    <ServiceCard service_card={cleaning_service_card} img_src={cleaning_img} />
                </Col>

                <Col xs={12} sm={12} md={4} lg={4} xl={4} className="p-2">
                    <ServiceCard service_card={junk_removal_service_card} img_src={removal_img}/>
                </Col>

                <Col xs={12} sm={12} md={4} lg={4} xl={4} className="p-2">
                    <ServiceCard service_card={moving_service_card} img_src={moving_img}/>
                </Col>

            </Row>
        </Container>
    );
}