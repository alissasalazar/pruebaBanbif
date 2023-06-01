import Form from "react-bootstrap/Form";
import "../Styles/form.css"
import Container from "react-bootstrap/Container";
import ElementOfForm from "./Radio";
import { question1,question2,question3,question4, question5} from "../../Utils/strings";
import Select from "./Select";
export default function FormUser() {
  return (
    <Form>
      <Container className="form">
        <ElementOfForm question ={question1} group={1}/>
        <hr/>
        <ElementOfForm question ={question2} group={2}/>
        <hr/>
        <Select question ={question3}/>
        <hr/>
        <Select question ={question4}/>
        <hr/>
        <ElementOfForm question ={question5} group={3}/>
      </Container>
    </Form>
  );
}


