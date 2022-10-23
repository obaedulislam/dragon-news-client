import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Register = () => {

    const {createUser,  updateUserProfile} = useContext(AuthContext);

    const[error, setError] = useState('');
    const[accepted, setAccepted] = useState();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;
        //console.log(name, photoUrl, email, password);

        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            setError('');
            handleUpdateUserProfile(name, photoUrl);
        })
        .catch(e => {
            console.error(e);
            setError(e.message);
        })
        
    }

    const handleUpdateUserProfile = (name, photoUrl) => {
        const profile = {
            displayName: name,
            photoURL: photoUrl
        }
        updateUserProfile(profile)
        .then(() => {})
        .catch(e => console.error(e))
    }

    const handleAccepted = event => {
        setAccepted(event.target.checked);
    }



    return (
        <div>
             <Form onSubmit = {handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control name="name" type="text" placeholder="Your name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control name ="photoUrl" type="text" placeholder="Photo url" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name = "email" type="email" placeholder="Enter email"  required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check 
                    onClick={handleAccepted}
                     type="checkbox" 
                     label={<>Accept 
                     <Link to='/terms'>"Accept Terms & Condition"</Link></>} />
                </Form.Group>

                <div>
                    <Form.Text className="text-danger">
                    {error}
                    </Form.Text>
                </div>

                <Button className='mt-2' variant="primary" type="submit" disabled={!accepted}>
                    Register
                </Button>
            </Form>
        </div>
    );
};

export default Register;