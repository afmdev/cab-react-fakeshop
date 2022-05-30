import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
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
        <div className="login-image"></div>
        <div className="login-title">
            <h1>Login</h1>
        </div>
        <Form onSubmit={handleSubmit} className="form-container">
            <Form.Group>
            <Form.Control
                autoFocus
                placeholder="E-Mail"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            </Form.Group>
            <Form.Group>
            <Form.Control
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
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
