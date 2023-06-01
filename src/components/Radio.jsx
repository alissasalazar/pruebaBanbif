/* eslint-disable react/prop-types */
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "../Styles/radio.css"


export default function ElementOfForm({question,group}) {
  return (
    <Row>
      <Col xs={12} md={8}>
        <Form.Label column sm="13 questions">
          {question}
        </Form.Label>
      </Col>
      <Col xs={6} md={4}>
          <div key={`inline-radio`} className="mb-2 options">
            <Form.Check
            className="radio"
              inline
              label="Si"
              name={group}
              type="radio"
            />
            <Form.Check
              inline
              label="No"
              name={group}
              type="radio"
            />
          </div>
      </Col>
    </Row>
  );
}
