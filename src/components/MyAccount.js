import React, { useContext, useEffect, useState } from 'react';
import { Form, Button, FloatingLabel } from 'react-bootstrap';
import { PersonCircle } from 'react-bootstrap-icons';
import { AuthContext } from '../context/authContext';

function MyAccount() {

	const { user, userUpdate, removeUser } = useContext(AuthContext)
	const [name, setName] = useState("")
	const [displayName, setDisplayName] = useState(user.displayName)
	const [photoURL, setPhotoURL] = useState(user.photoURL)




	const handleNameChange = (e) => {
		setName(e.target.value)
	}


	const handleUpdate = (e) => {
		e.preventDefault()
		userUpdate(name)
		setDisplayName(user.displayName)
		setPhotoURL(user.photoURL)
	}

	const handleRemove = (e) => {
		e.preventDefault()
		removeUser(name)
		console.log("noborra")
	}




	return (
		<div className="MyAccount">
			{/*<div className="login-image"></div>*/}
			<div className="fs-1 fw-bold mb-4 ">

				{photoURL === null ? <PersonCircle size={100} className="m-1" /> : <img src={photoURL} alt={user.email} width="100px" heigth="100px" />}

			</div>
			<div className="fs-1 fw-bold mb-3 ">{user.displayName === null ? `${user.email}` : displayName}<br /><span className="fs-5">{user.email}</span></div>
			<p className="fs-10 text-center">Account created:<br />{user.metadata.creationTime}</p>
			<div><Button variant="danger">Edit Account</Button>{' '}
				<Button variant="link" onClick={handleRemove}>Delete Account</Button></div>
			<div className="login-title">
				<h1>Edit  Account</h1>
			</div>

			<Form className="form-container">
				<Form.Group>

					<FloatingLabel controlId="floatingName" label="Name" className="mb-3">
						<Form.Control
							type="text"
							name="name"
							placeholder="Name"
							value={name}
							// onChange={(e) => setEmail(e.target.value)} />
							onChange={handleNameChange} />
					</FloatingLabel>


				</Form.Group>
				<Button block="true" variant="danger" type="submit" onClick={handleUpdate} >
					Save Changes
				</Button>
			</Form>
		</div>
	);
}

export default MyAccount
