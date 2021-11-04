import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import { useHistory, useLocation } from 'react-router-dom';

import './Login.css'

const Login = () => {

    const { signInUsingGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    const handleButton = () => {
        signInUsingGoogle()
            .then(() => {
                history.push(redirect_uri);
            });
    }
    return (
        <div>
            <h2>Please Log in Here</h2>

            <div className="mt-5  d-flex justify-content-center">
                <div>
                    <Form >
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter your email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Enter Your Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
            <br />
            <div className="login-2">
                <Button onClick={handleButton} className="bg-white mx-3"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI-zXnqYiwy7oV786GGgKR0fnQeqnlRDGkaUAbSts2UgHdlbd8pq61uJLWNXUCFcqTCbc&usqp=CAU" alt="" /></Button>
                <Button className="bg-white mx-3"><img src="https://static.xx.fbcdn.net/rsrc.php/v3/yu/r/-UrAiCz94rq.png" alt="" /></Button>
                <Button className="bg-white mx-3"><img src="https://e7.pngegg.com/pngimages/914/758/png-clipart-computer-icons-logo-github-github-logo-logo-computer-program-thumbnail.png" alt="" /></Button>
            </div>

        </div>
    );
};

export default Login;