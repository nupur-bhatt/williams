import Card from 'react-bootstrap/Card';
import '../GifCard/GifCard.css'

export default function GifCard(props){

    return(
        <Card className='gifcard'>
            <Card.Img src={props.img_src} alt={props.card_info.image_alt} className='gifcard_img'/>
             <Card.Body>
                <Card.Text className='gifcard_text'>
                    {props.card_info.heading}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}