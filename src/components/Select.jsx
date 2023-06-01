/* eslint-disable react/prop-types */
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "../Styles/select.css"

export default function Select({ question }) {
  return (
    <Row>
      <Col xs={12} md={8}>
        <Form.Label column sm="8">
          {question}
        </Form.Label>
      </Col>
      <Col xs={6} md={4}>
      <Form.Select className="select">
      <option ></option>
      <option  value="1">One</option>
      <option  value="2">Two</option>
      <option  value="3">Three</option>
    </Form.Select>
      </Col>
    </Row>
  );
}
