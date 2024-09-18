import { Button, Container, Navbar, Offcanvas, Row, Col } from 'react-bootstrap'
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const NavDashboard = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Button variant="outline-primary" onClick={handleShow}><GiHamburgerMenu /></Button>
                        <Offcanvas show={show} onHide={handleClose} >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title>List</Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Row>
                                    <Col lg='12'>
                                        <Button as={Link} to=" Product" onClick={() => {handleClose()}}>
                                        Product
                                        </Button>
                                    </Col>
                                    <Col lg='12'>
                                        <Button as={Link}  to=' Dash' variant="secondary" onClick={() => {handleClose()}}>Dashboard</Button>
                                    </Col>

                                    <Col lg='12'>
                                        <Button as={Link} to='/' variant="success" >Logout</Button>
                                    </Col>
                                </Row>
                                
                            </Offcanvas.Body>
                        </Offcanvas>
                        <Navbar.Brand>SIMS</Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}

