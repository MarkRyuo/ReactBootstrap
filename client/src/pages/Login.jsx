import Container from "react-bootstrap/esm/Container"
import Formlogin from "../components/Formlogin"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Login.css' ;
import ReactLogo from '../assets/react.svg'

export const Login = () => {

    return (
        <>

            <Container lg className="Container-login">
                <Row>
                    <Col lg={6}>
                        <img src={ReactLogo} alt="Error Image"></img>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6}>
                        <Formlogin/>
                    </Col>
                </Row>
            </Container>

        </>
    )
}