import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

import { BsBoxSeam } from "react-icons/bs";


export const Navbar1 = () => {

    return (
        <>
            <Navbar bg='light'>
                <Container xl>
                    <Navbar.Brand href="#">
                        <BsBoxSeam size={30}/>
                        React Bootstrap
                    </Navbar.Brand>
                    <Button variant="outline-primary">Download App</Button>
                </Container>
            </Navbar>
        </>
    )
}