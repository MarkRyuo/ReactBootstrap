import Container from "react-bootstrap/esm/Container"
import Formlogin from "../components/Formlogin"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Login.css' ;

export const Login = () => {

    return (
        <>

            <Container lg className="Container-login">
                <Row>
                    <Col>
                        <img src="" alt="Error Image"></img>
                    </Col>
                </Row>
                <Row>
                    <Col lg='12'>
                        <Formlogin/>
                    </Col>
                </Row>
            </Container>

        </>
    )
}