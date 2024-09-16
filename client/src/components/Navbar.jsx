import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';


export const Navbar1 = () => {

    return (
        <>
            <Navbar bg='light'>
                <Container xl>
                    <Navbar.Brand href="#">
                        <img alt="" src="/client/src/assets/react.svg" width="30" height="30" className=""/>
                        React Bootstrap
                    </Navbar.Brand>
                    <Button variant="outline-primary">Download App</Button>
                </Container>
            </Navbar>
        </>
    )
}