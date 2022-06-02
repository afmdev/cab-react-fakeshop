import React, { useContext, useState } from 'react';
import { Form, Button, FloatingLabel } from 'react-bootstrap';
import { AuthContext } from '../context/authContext';

function MyAccount() {

	const { login, user } = useContext(AuthContext)
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const handleEmailChange = (e) => {
		setEmail(e.target.value)
	}

	const handlePasswordChange = (e) => {
		console.log(password)
		setPassword(e.target.value)
	}

	const handleLogin = (e) => {
		e.preventDefault()
		login(email, password)
	}

	return (
		<div className="MyAccount">
			{/*<div className="login-image"></div>*/}
			<div className="fs-1 fw-bold mb-5 ">Welcome <br /> {user.email}</div>
			<div className="login-title">
				<h1>Edit  Account</h1>
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
				<Button block="true" type="submit" onClick={handleLogin} >
					Save Changes
				</Button>
			</Form>
		</div>
	);
}

export default MyAccount
