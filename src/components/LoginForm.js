import React, { useState } from 'react';
import { Form, Button, FloatingLabel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

function validateForm() {
    return email.length > 0 && password.length > 0;
}

function handleSubmit(event) {
    event.preventDefault();
}

    return (
        <div className="LoginForm">
        {/*<div className="login-image"></div>*/}
        <div className="login-title">
            <h1>Login</h1>
        </div>
        <Form onSubmit={handleSubmit} className="form-container">
        
            <Form.Group>

            <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
            >
                <Form.Control 
                    type="email" 
                    placeholder="name@example.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password">
                <Form.Control 
                    type="password" 
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                />
            </FloatingLabel>

            </Form.Group>
            <Button block="true" type="submit" disabled={!validateForm()}>
            Login
            </Button>
            <Link to="/">Forgot Password?</Link>
            <hr />
            <Button block="true" type="submit" className="btn-sing-up">
            Sign Up
            </Button>
        </Form>
        </div>
    );
}

export default LoginForm
