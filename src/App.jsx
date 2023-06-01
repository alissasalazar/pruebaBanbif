import "./App.css";
import QuestionsForm from "./components/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import WelcomeUser from "./components/WelcomeUser";
import TimeLine from "./components/TimeLine";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsChevronLeft } from "react-icons/bs";
import logo from "../src/img/logoBanbif.jpeg"

function App() {
  return (
    <div>
      <Container>
        <Row>
          <Col sm={4}>
            <img className= "brand" src={logo} alt="Banbif logo" />
            <div className="contentBack">
              <BsChevronLeft className="iconBack"/> <p className="nameBack"> Volver</p>
            </div>
            <TimeLine />
          </Col>
          <Col sm={8}>
            <WelcomeUser />
            <QuestionsForm />
            <div className="contentButton">
              <button className="button">Siguiente</button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
