import { Container, Row, Col, Image } from "react-bootstrap";
import './Reviews.css';
import ReviewCard from "../ReviewCard/ReviewCard";
import reviews_image from "../../assets/images/vitaly-gariev-RLaaGzDN-xE-unsplash.jpg";


export default function Reviews(){

    const headline = "What our customers are saying";
    const secondline = "Customer Experiences That Speak for Themselves";
    const reviews = 
    [
        {
            review: "Only took a few hours and got rid of all my junk, they even cleaned my basement where I had debris from dry wall. They even cleaned everything up and thoroughly vacuumed and mopped! 10/10",
            author: "Ashley Grant",
            location : "Ottawa, Ontario"
        }, 
        {
            review: "The staff was friendly and fast they moved my furniture with ease and even helped me put some of my furniture and bed frame back together. Excellent service!",
            author: "Darryl",
            location : "Scarbourough, Ontario"
        },
        {
            review: "The boss was extremely helpful and professional. Didnt waste time or charge me for any hidden fees like other companies have in the past.",
            author: "Meagan S.",
            location : "Ottawa, Ontario"
        },
        {
            review: "Fast response, friendly crew, and extremely professional. They helped with moving heavy equipment and left the area clean and ready for use the same day.",
            author: "Andre T.",
            location: "Vaughan, Ontario"
        },
        {
            review: "We use them regularly for our commercial cleaning and occasional junk removal. Always reliable, easy to communicate with, and the quality of work is consistently great. No stress at all.",
            author: "Michael R.",
            location: "Brampton, Ontario"
        },
        {
            review: "Booked them for a move and a post-move clean and couldn’t be happier. The crew was careful with our furniture and made sure everything was clean before they left. Highly recommend.",
            author: "Samantha L.",
            location: "Mississauga, Ontario"
        },
        {
            review: "Used them for office junk removal and a deep clean afterward. They cleared out old furniture and left the space clean and ready to use the same day. Easy communication and fair pricing.",
            author: "Jason M.",
            location: "Toronto, Ontario"
        },
    ];
    console.log(reviews[0]);

    return(
        <Container fluid className="g-0 reviews_container">
            <Row className="g-0">
                
                <Col xs={12} sm={12} md={6} lg={7} xl={7}>
                <Row className="reviews_heading_container">
                    <h2 className='reviews_heading'>{headline}</h2>
                    <p className='reviews_subheading'>{secondline}</p>
                </Row>
                <Container fluid className="scroll_container_padding">
                    <div className="reviews_scroll_container">
                            <ReviewCard card_info={reviews[0]}/>
                            <ReviewCard card_info={reviews[1]}/>
                            <ReviewCard card_info={reviews[2]}/>
                            <ReviewCard card_info={reviews[3]}/>
                            <ReviewCard card_info={reviews[4]}/>
                            <ReviewCard card_info={reviews[5]}/>
                            <ReviewCard card_info={reviews[6]}/>
                    </div> 
                    </Container>
                </Col>
                <Col xs={12} sm={12} md={6} lg={5} xl={5}>
                    <Image src={reviews_image} className="review_img"/>
                </Col>
                
            </Row>
        </Container>
    );
}