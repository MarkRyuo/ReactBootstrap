import { Button, Container, Navbar, Offcanvas } from 'react-bootstrap'
import { GiHamburgerMenu } from "react-icons/gi";


export const NavDashboard = () => {

    return (
        <>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Button variant="outline-primary"><GiHamburgerMenu /></Button>
                    <Navbar.Brand>SIMS</Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}

