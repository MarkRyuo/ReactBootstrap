import { Button, Container, Navbar, Offcanvas } from 'react-bootstrap'
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export const NavDashboard = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const navigate = useNavigate() ;

    conts handleProduct = () => {
        navigate("/Product")
    }
    return (
        <>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Button variant="outline-primary" onClick={handleShow}><GiHamburgerMenu /></Button>
                        <Offcanvas show={show} onHide={handleClose}>
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title>List</Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Button variant="primary" onClick={() => {
                                    handleClose()
                                    handleProduct()
                                }}>Product</Button>
                                <Button variant="secondary">Secondary</Button>
                                <Button variant="success">Success</Button>
                            </Offcanvas.Body>
                        </Offcanvas>
                        <Navbar.Brand>SIMS</Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}

