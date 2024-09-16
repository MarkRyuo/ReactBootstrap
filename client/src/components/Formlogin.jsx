
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import './Formlogin.css' ;

function Formlogin() {
    return (
        <>  
            <div>
                <FloatingLabel 
                controlId="floatingInput"
                label="Email address"
                className="mb-3 floating-label">

                    <Form.Control type="email" placeholder="name@example.com" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPassword" label="Password">
                    <Form.Control type="password" placeholder="Password" />
                </FloatingLabel>
            </div>
            
        </>
    );
}

export default Formlogin;