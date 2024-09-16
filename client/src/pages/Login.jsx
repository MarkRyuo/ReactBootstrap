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
                        <Formlogin/>

                    </Col>

                </Row>
            </Container>

        </>
    )
}