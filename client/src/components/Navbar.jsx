import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


export const Navbar1 = () => {

    return (
        <>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#">
                        <img alt="" src="/client/src/assets/react.svg" width="30" height="30" className=""/>
                        React Bootstrap
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}