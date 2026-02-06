import Card from 'react-bootstrap/Card';
import '../GifCard/GifCard.css'

export default function GifCardBottom(props){

    return(
        <Card className='gifcard'>
            <Card.Body>
                <Card.Text className='gifcard_text'>
                    {props.card_info.heading}
                </Card.Text>
            </Card.Body>
            <Card.Img src={props.img_src} alt={props.card_info.image_alt} className='gifcard_img'/>
        </Card>
    );
}