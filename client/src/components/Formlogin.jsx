import Form from 'react-bootstrap/Form';


export const Formlogin = () => {

    return (
        <>
            <Form.Label htmlFor="inputPassword5">Password</Form.Label>
                <Form.Control
                    type="password"
                    id="inputPassword5"
                    aria-describedby="passwordHelpBlock"
                />
                <Form.Text id="passwordHelpBlock" muted>
                    Your password must be 8-20 characters long, contain letters and numbers,
                    and must not contain spaces, special characters, or emoji.
                </Form.Text>

            <Form.Label htmlFor="inputUsername5">Username</Form.Label>
                <Form.Control
                    type="username"
                    id="inputUsername5"
                />
        </>
    )
}