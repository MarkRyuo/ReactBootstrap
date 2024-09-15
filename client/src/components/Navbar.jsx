// import {Container} from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


export const Navbar1 = () => {

    return (
        <>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#">
                        <img alt="Error Logo" src="/client/public/vite.svg" width="30" height="30" className="d-inline-block align-top"/>
                        React Bootstrap
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}