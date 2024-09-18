import { Button, Container, Navbar, Offcanvas } from 'react-bootstrap'
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
                        <Offcanvas show={show} onHide={handleClose}>
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title>List</Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Button as={Link} to=" Product">
                                    Product
                                </Button>
                                <Button as={Link}  to=' Dash' variant="secondary" onClick={handleClose}>Dashboard</Button>
                                <Button as={Link} to='/' variant="success">Logout</Button>
                            </Offcanvas.Body>
                        </Offcanvas>
                        <Navbar.Brand>SIMS</Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}

