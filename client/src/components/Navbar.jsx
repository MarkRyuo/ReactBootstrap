import {Container} from 'react-bootstrap'

export const Navbar = () => {

    return (
        <>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">
                        <img alt="" src="/img/logo.svg" width="30" height="30" className="d-inline-block align-top"/>
                        React Bootstrap
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}