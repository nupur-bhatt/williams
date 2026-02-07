import Card from 'react-bootstrap/Card';
import '../GifCard/GifCard.css';
import { Container, Image, Row } from 'react-bootstrap';

export default function GifCardBottom(props){

    return(
        <Card className='gifcard'>
            <Card.Body>
                <Card.Text className='gifcard_text'>
                    {props.card_info.heading}
                </Card.Text>
            </Card.Body>
            <Row className='g-0 gifcard_img_container'>
                <Image fluid src={props.img_src} alt={props.card_info.image_alt} className='gifcard_img' />
            </Row>
        </Card>
    );
}