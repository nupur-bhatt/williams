import HomeCarousel from '../HomeCarousel/HomeCarousel';
import { Container } from 'react-bootstrap';
import './Home.css';
import About from '../About/About';

export default function Home(){

    return(
        <Container fluid className="g-0">
            <HomeCarousel />
            <About />       
        </Container>
    );
}