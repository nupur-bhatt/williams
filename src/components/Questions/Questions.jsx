import { Container, Row, Col } from "react-bootstrap";
import QuestionCard from "../QuestionCard/QuestionCard";
import './Questions.css';

export default function Questions(){

    const headline = "Frequently asked questions";
    const subheading = "Have questions before getting started? We’ve got you covered.";
    const content = "Explore helpful answers about our services, scheduling, and what to expect when working with us.";
    const pre_contact_us = "Can’t find what you’re looking for?";

    const faqs = [
        {
            question:"What services do you offer?",
            answer:"We provide professional cleaning, junk removal, and moving services for both residential and commercial spaces. Whether it’s a one-time job or ongoing service, we tailor our solutions to fit your needs."
        },
        {
            question:"Do you serve both homes and businesses?",
            answer:"Yes. We work with homeowners, landlords, offices, retail spaces, warehouses, and small businesses. No job is too big or too small."
        },
        {
            question:"How do pricing and quotes work?",
            answer:"Pricing depends on the scope of work, size of the space, and type of service. We provide clear, upfront quotes with no hidden fees, so you know exactly what to expect before we begin."
        },
        {
            question:"Are your cleaning products safe and eco-friendly?",
            answer:"We use high-quality, professional-grade cleaning products, including eco-conscious options whenever possible. Our methods are safe for people, pets, and work environments."
        },
        {
            question:"What happens to the junk you remove?",
            answer:"We prioritize responsible disposal, recycling, and donation whenever possible. Items are sorted to reduce landfill waste and ensure proper handling."
        },
        {
            question:"Do I need to prepare my space before the service?",
            answer:"Minimal prep is needed. We recommend clearing personal or sensitive items, but our team handles the heavy lifting, cleanup, and organization."
        },
        {
            question:"How far in advance do I need to book?",
            answer:"We offer flexible scheduling and can often accommodate short-notice bookings. For larger jobs or commercial services, booking in advance is recommended."
        },
        {
            question:"Can I book multiple services at once?",
            answer:"Absolutely. Many clients combine junk removal with cleaning or moving services for a more efficient, stress-free experience."
        },
        {
            question:"What areas do you serve?",
            answer:"We proudly serve residential and commercial clients across Ontario. If you’re unsure whether we cover your area, just reach out."
        }
    ];

    return(
     <Container fluid className='g-0 questions_container'>
        <Row className='g-0'>
            
            <Row className='g-0'>
                <h2 className='questions_heading'>{headline}</h2>
                <h6 className='questions_subheading'>{subheading}</h6>
            </Row>
           
            <Col className="g-0 accordion_col">
                <QuestionCard card_info={faqs[0]} defaultActiveKey="0"/>
                <QuestionCard card_info={faqs[1]} />
                <QuestionCard card_info={faqs[2]} />
                <QuestionCard card_info={faqs[3]} />
                <QuestionCard card_info={faqs[4]} />
                <QuestionCard card_info={faqs[5]} />
                <QuestionCard card_info={faqs[6]} />
                <QuestionCard card_info={faqs[7]} />
                <QuestionCard card_info={faqs[8]} />
            </Col>
        </Row>
        
        <h6 className="questions_contact_us">{pre_contact_us} <em><a href="/contact">Contact us</a> to book a free quote today.</em>
            
        </h6>
  
    </Container>
    );
}