import { Container, Image, Button, Row} from 'react-bootstrap';
import './ReviewCard.css';

export default function ReviewCard(props){

    return(
        <Container fluid className="g-0 review_card" >
            <Row className='g-0'>
                <h6 className='review_card_content'>{props.card_info.review}</h6>
                <b className='review_card_author'>{props.card_info.author}</b>
                <i className='review_card_location'>{props.card_info.location}</i>
            </Row>
        </Container>
    );
}