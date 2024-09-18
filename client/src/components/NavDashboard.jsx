import { Button, Container, Navbar, Offcanvas, Row, Col } from 'react-bootstrap'
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoIosArrowDropdown } from "react-icons/io";
import { MdProductionQuantityLimits } from "react-icons/md";

export const NavDashboard = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Navbar className="bg-tertiary">
                <Container>
                    <Button variant="outline-primary" onClick={handleShow}><GiHamburgerMenu /></Button>
                        <Offcanvas show={show} onHide={handleClose} >
                            <Offcanvas.Header closeButton>
                                <Link to='#' style={{textDecoration: "none", color: "black"}}>
                                    <Offcanvas.Title>
                                    <IoPersonCircleOutline size={50}/>
                                        Admin Name
                                        <IoIosArrowDropdown />
                                    </Offcanvas.Title>
                                </Link>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Row className='text-center'>
                                    <Col lg='12' className='my-3' >
                                        <Button as={Link} to=" Product" onClick={() => {handleClose()}} style={{width:'100%'}}>
                                            <p className='m-0' style={{display:"flex"}}><MdProductionQuantityLimits size={25}/>Product</p>
                                        </Button>
                                    </Col>
                                    <Col lg='12' className='my-3'>
                                        <Button as={Link}  to=' Dash' variant="secondary" onClick={() => {handleClose()}}>Dashboard</Button>
                                    </Col>

                                    <Col lg='12' className='my-3'>
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

