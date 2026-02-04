import { Container } from 'react-bootstrap';
import './About.css';

export default function About(){

    const headline="About Us";
    const about_content = "At our company, our mission is to empower business by providing comprehensive solutions that enhance efficiency and professionalism. We specialize in junk removal, ensuring that businesses can maintain a clean and clutter-free environment. Our top-notch cleaning services promote a healthy workspace, enabling employees to thrive. Additionally, our reliable moving services facilitate seamless transitions, allowing businesses to focus on their core operations. We are dedicated to serving our community with integrity, reliability and exceptional customer service, helping small businesses flourish.";

    return(
        <Container fluid className="g-0 about-gradient">
            <h2 className='about-heading'>{headline}</h2>
            <p className='about-content'>{about_content}</p>
        </Container>
    );
}