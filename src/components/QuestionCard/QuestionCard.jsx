import { Accordion } from "react-bootstrap";
import './QuestionCard.css';

export default function QuestionCard(props){
    return(
        <Accordion className="question_card" flush>
            <Accordion.Item eventKey="0" className="question_card_item">
                <Accordion.Header className="question_card_header">{props.card_info.question}</Accordion.Header>
                <Accordion.Body className="question_card_body">
                    {props.card_info.answer}
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}