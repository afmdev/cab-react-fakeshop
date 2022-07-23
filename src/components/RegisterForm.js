import React, { useContext, useState } from 'react';
import { Form, Button, FloatingLabel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/authContext';

function RegisterForm() {

	const { register } = useContext(AuthContext)
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const handleEmailChange = (e) => {
		setEmail(e.target.value)
	}

	const handlePasswordChange = (e) => {
		console.log(password)
		setPassword(e.target.value)
	}

	const handleRegister = (e) => {
		e.preventDefault()
		register(email, password)
	}


	return (
		<div className="RegisterForm">
			{/*<div className="login-image"></div>*/}
			{/* <h1 className="mb-5">Register an Account</h1> */}
			<div className="login-title">
				<h2>Register</h2>
			</div>
			<Form className="form-container">
				<Form.Group>

					<FloatingLabel controlId="floatingInput" label="E-mail" className="mb-3">
						<Form.Control
							type="email"
							name="email"
							placeholder="E-mail"
							value={email}
							// onChange={(e) => setEmail(e.target.value)} />
							onChange={handleEmailChange} />
					</FloatingLabel>

					<FloatingLabel controlId="floatingPassword" label="Password">
						<Form.Control
							type="password"
							name="password"
							placeholder="Password"
							value={password}
							// onChange={(e) => setPassword(e.target.value)} />
							onChange={handlePasswordChange} />
					</FloatingLabel>

				</Form.Group>

				<Button block="true" variant="danger" type="submit" onClick={handleRegister} className="mb-2">
					Register
				</Button>

				<hr />
				<p> Already have an account?</p>
				<Link to="/login">
					<Button block="true" type="submit" className="btn-sign-up">
						Login
					</Button>
				</Link>

			</Form>
			<p className="mt-4 text-secondary"><small>Remember use a fake email but with a valid LTD (.com, .net, .org, etc) and the password should be at least 6 characters.</small></p>
		</div>
	);
}

export default RegisterForm
