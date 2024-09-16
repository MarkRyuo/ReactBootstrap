import Container from "react-bootstrap/esm/Container"
import Formlogin from "../components/Formlogin"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Login.css' ;
import ReactLogo from '../assets/react.svg'
import Button from 'react-bootstrap/Button';

export const Login = () => {

    return (
        <>

            <Container lg className="Container-login mt-4">
                <Row className="text-center" >
                    <Col lg={12}>
                        <img src={ReactLogo} alt="Error Image" width={"100px"}></img>
                    </Col>
                    <Col lg={12} className="d-flex justify-content-center">
                        <div style={{width:"300px"}}>
                            <Formlogin/> 
                        </div>   
                    </Col>
                    <Col lg={12}>
                        <Button variant="primary">Login</Button>
                    </Col>
                </Row>
            </Container>

        </>
    )
}