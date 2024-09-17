import { Button, Container, Navbar, Offcanvas } from 'react-bootstrap'
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';


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
                                <Button variant="primary">Primary</Button>{' '}
                                <Button variant="secondary">Secondary</Button>{' '}
                                <Button variant="success">Success</Button>{' '}
                                <Button variant="warning">Warning</Button>{' '}
                                <Button variant="danger">Danger</Button>{' '}
                                <Button variant="info">Info</Button>
                                <Button variant="light">Light</Button>
                                <Button variant="dark">Dark</Button>
                                <Button variant="link">Link</Button>
                            </Offcanvas.Body>
                        </Offcanvas>
                    <Navbar.Brand>SIMS</Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}

