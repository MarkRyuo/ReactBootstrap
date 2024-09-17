import Container from "react-bootstrap/esm/Container"
import Formlogin from "../components/Formlogin"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import './Login.css' ;
// import ReactLogo from '../assets/react.svg'
import Button from 'react-bootstrap/Button';
import { Navbar1 } from "../components/Navbar";
import { BsBox } from "react-icons/bs";

import { useNavigate } from "react-router-dom";


export const Login = () => {

    const navigate = useNavigate() ;

    const Handlelogin = () => {
        navigate("/Dashboard")
    }

    return (
        <>  
            <Container fluid className="mb-5 pb-5">
                <Navbar1/>
            </Container>
            <Container lg className="Container-login mt-4">
                <Row className="text-center" >
                    <Col lg={12}>
                        <BsBox size={75}/>
                    </Col>
                    <Col lg={12} className="d-flex justify-content-center mt-3">
                        <div style={{width:"400px"}}>
                            <Formlogin/> 
                        </div>   
                    </Col>
                    <Col lg={12} className="mt-3">
                        <Button variant="primary" size="lg" onClick={Handlelogin()}>Login</Button>
                    </Col>
                </Row>
            </Container>

        </>
    )
}