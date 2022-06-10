import React, { useContext, useEffect, useState } from 'react';
import { Form, Button, FloatingLabel } from 'react-bootstrap';
import { PersonCircle } from 'react-bootstrap-icons';
import { AuthContext } from '../context/authContext';

function MyAccount() {

	const { user, userUpdate, deleteYourUser } = useContext(AuthContext)
	const [name, setName] = useState("")
	const [displayName, setDisplayName] = useState(user.displayName)
	const [photoURL, setPhotoURL] = useState(user.photoURL)

	console.log("user", user)

	const handleNameChange = (e) => {
		setName(e.target.value)

	}

	const handleImageChange = (e) => {
		setPhotoURL(e.target.value)
	}

	const handleUpdate = (e) => {
		e.preventDefault()
		if (name.trim().length == 0) {
			userUpdate(user.displayName, photoURL)
		} else {
			setDisplayName(name)
			userUpdate(name, photoURL)
		}

	}

	const handleRemove = (e) => {
		deleteYourUser()
	}


	const messageDate = (time) => {
		return new Date(time * 1000).toLocaleDateString()
	}


	return (
		<div className="MyAccount">
			{/*<div className="login-image"></div>*/}
			<div className="fs-1 fw-bold mb-4 ">

				{photoURL === null ? <PersonCircle size={100} className="m-1" /> : <img src={photoURL} alt={user.email} width="100px" heigth="100px" />}

			</div>
			<div className="fs-1 fw-bold mb-3 ">{user.displayName === null ? `${user.email}` : displayName}<br /><span className="fs-5">{user.email}</span></div>
			<p className="fs-10 text-center">Account created:<br />
				{messageDate(user.metadata.createdAt)}</p>
			<div><Button variant="danger" className="mb-1">Edit Account</Button>{' '}
				<Button variant="link" className="mb-5" onClick={handleRemove}>Delete Account</Button></div>
			<div className="login-title">
				<h2>Edit  Account</h2>
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

					<Form.Select className="mb-3" onChange={handleImageChange}>
						<option>Select profile image</option>
						<option value="https://www.alejandrofm.com/cab/profiles/profile001.svg">Image 1</option>
						<option value="https://www.alejandrofm.com/cab/profiles/profile002.svg">Image 2</option>
						<option value="https://www.alejandrofm.com/cab/profiles/profile003.svg">Image 3</option>
						<option value="https://www.alejandrofm.com/cab/profiles/profile004.svg">Image 4</option>
					</Form.Select>


				</Form.Group>
				<Button block="true" variant="danger" type="submit" onClick={handleUpdate} >
					Save Changes
				</Button>
			</Form>
		</div>
	);
}

export default MyAccount
