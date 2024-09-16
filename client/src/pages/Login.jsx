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
                <Row className="text-center" >
                    <Col lg={12}>
                        <img src={ReactLogo} alt="Error Image"></img>
                    </Col>
                    <Col lg={6} md={6}>
                        <Formlogin/>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    
                </Row>
            </Container>

        </>
    )
}