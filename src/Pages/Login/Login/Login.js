import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';


const Login = () => {

    const {signIn} = useContext(AuthContext);

    const navigate = useNavigate();

    const [error, setError] = useState('');

    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            navigate(from, {replace: true});
            setError('');
        })
        .catch(e => {
            console.error(e);
            setError(e.message);
        })
    }

    return (
        <div>
            <Form onSubmit ={handleSubmit}>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email"  required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required/>
                </Form.Group>

                <div>
                    <Form.Text className="text-danger">
                    {error}
                    </Form.Text>
                </div>
                <Button className='mt-2' variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </div>
    );
};

export default Login;