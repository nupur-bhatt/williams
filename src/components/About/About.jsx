import { Col, Container, Row, Card, Image } from 'react-bootstrap';
import './About.css';
import GifCard from '../GifCard/GifCard';
import GifCardBottom from '../GifCard/GifCardBottom';
import moving_truck from "../../assets/images/shipping-fast.svg";
import eco_cleaning_spray from "../../assets/images/bio-leaves.svg";
import junk_removal_dumpster from "../../assets/images/recycle-bin.svg";
import commercial_culture from "../../assets/images/business-deal.svg";
import schedule_calendar from "../../assets/images/calendar-check.svg";
import crew_professional from "../../assets/images/team-check.svg";
// import mission_image from "../../assets/images/vitaly-gariev-RLaaGzDN-xE-unsplash.jpg";
import mission_image from "../../assets/images/holding-bucket-of-cleaning-supplies.jpg";

export default function About(){

    const headline = "Our mission";
    const about_quote = `"At our company, our mission is to empower business by providing comprehensive solutions that enhance efficiency and professionalism."`;
    const about_content = "We specialize in junk removal, ensuring that businesses can maintain a clean and clutter-free environment. Our top-notch cleaning services promote a healthy workspace, enabling employees to thrive. Additionally, our reliable moving services facilitate seamless transitions, allowing businesses to focus on their core operations. We are dedicated to serving our community with integrity, reliability and exceptional customer service, helping small businesses flourish.";
    const choose_secondline = "Whether it’s a commercial office, retail store, or residential home, our team delivers meticulous cleaning that keeps your environment safe, healthy, and inviting for employees, clients, and residents alike.";
    const choose_firstline = "Comprehensive cleaning, moving, and junk removal for commercial and residential spaces.";
    const choose_headline = "Why choose us?";

    const moving_card = {
        heading: "Stress-Free Moving Services",
        image_alt: "Animated pickup truck"
    }

    const junk_removal_card = {
        heading: "Simple & Responsible Junk Removal",
        image_alt: "Animated recycle bin"
    }

    const eco_cleaning_card = {
        heading: "Premium, Green Cleaning",
        image_alt: "Animated eco-conscious cleaning spray"
    }

    const commercial_card = {
        heading: "Complete Commercial Cleaning Solutions",
        image_alt: "Animated commercial building with people"
    }

    const schedule_card = {
        heading: "Flexible Scheduling & Smooth Communication",
        image_alt: "Animated calendar"
    }

    const crew_card = {
        heading: "Reliable, Experienced Team",
        image_alt: "Animated reliable and efficient professional"
    }

    return(
        <Container fluid className='g-0 about-parent-container'>
            <Container fluid className='g-0 choose-us-container'>
                <Row className='g-0'><h2 className='choose-us-heading'>{choose_headline}</h2></Row>
                <Row className='g-0'>
                    <Col xs={12} sm={12} md={12} lg={4} xl={4} className='g-0  choose-text'>
                        <Row className='g-0'>
                            <h6 className='choose-us-firstline'>{choose_firstline}</h6>
                        </Row>
                        <Row className='g-0'>
                            <h5 className='choose-us-secondline'>{choose_secondline}</h5>
                        </Row>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={8} xl={8} className='g-0 align-content-center choose-cards'>
                        <Row className='g-0'>
                            <Col xs={6} sm={4} md={4} lg={4} xl={4} className='g-0'>
                                <GifCard card_info={moving_card} img_src={moving_truck} />
                            </Col>
                            <Col xs={6} sm={4} md={4} lg={4} xl={4} className='g-0'>
                                <GifCard card_info={eco_cleaning_card} img_src={eco_cleaning_spray} />
                            </Col>
                            <Col xs={6} sm={4} md={4} lg={4} xl={4} className='g-0'>
                                <GifCard card_info={crew_card} img_src={crew_professional}  />
                            </Col>
                            <Col xs={6} sm={4} md={4} lg={4} xl={4} className='g-0'>
                                <GifCard card_info={junk_removal_card} img_src={junk_removal_dumpster} />
                            </Col>
                            <Col xs={6} sm={4} md={4} lg={4} xl={4} className='g-0'>
                                <GifCard card_info={schedule_card} img_src={schedule_calendar}/>
                            </Col>
                            <Col xs={6} sm={4} md={4} lg={4} xl={4} className='g-0'>
                                <GifCard card_info={commercial_card} img_src={commercial_culture} />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Container fluid className='g-0 about-us-container'>
                <Row className='g-0'>
                    <Col xs={12} sm={12} md={6} lg={5} xl={5}>
                        <Image src={mission_image} className='mission_img'/>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={7} xl={7} className="g-0 ">
                        <Row><h2 className='about-heading'>{headline}</h2></Row>
                            <p className='about_quote'>{about_quote}</p>
                        <Row><p className='about-content'>{about_content}</p></Row>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}