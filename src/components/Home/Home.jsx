import HomeCarousel from '../HomeCarousel/HomeCarousel';
import { Container } from 'react-bootstrap';
import './Home.css';
import About from '../About/About';
import Services from '../Services/Services';
import Reviews from '../Reviews/Reviews';
import Questions from '../Questions/Questions';

export default function Home(){

    return(
        <Container fluid className="g-0">
            <HomeCarousel />
            <Services />
            <About />    
            <Reviews /> 
            <Questions  />
        </Container>
    );
}