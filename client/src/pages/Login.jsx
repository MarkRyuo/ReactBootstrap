import Container from "react-bootstrap/esm/Container"
import Formlogin from "../components/Formlogin"
import './Login.css' ;

export const Login = () => {

    return (
        <>

            <Container lg className="Container-login">
                <Formlogin/>
            </Container>

        </>
    )
}