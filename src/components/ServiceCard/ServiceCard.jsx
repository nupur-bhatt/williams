import { Container, Image, Button, Row} from 'react-bootstrap';
import './ServiceCard.css';

export default function ServiceCard(props){

    return(
        <Container fluid className="g-0 services_card" >
            <Button as="a" href={props.service_card.href} className="services_card_button">
                <div className='g-0 services_card_heading'>{props.service_card.heading}</div>
                <Image src={props.img_src} className="services_card_img"/>
            </Button>
        </Container>
    );
}