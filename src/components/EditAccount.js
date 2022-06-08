import React, { useContext, useState } from 'react'
import { Modal, Button, Form, FloatingLabel } from 'react-bootstrap'
import { AuthContext } from '../context/authContext'

function MyVerticallyCenteredModal(props) {

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

	return (
		<Modal
			{...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
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
		</Modal>
	);
}

function EditAccount() {
	const [modalShow, setModalShow] = useState(false);



	return (
		<>

			<Button variant="danger" onClick={() => setModalShow(true)}>Edit Account</Button>

			<MyVerticallyCenteredModal
				show={modalShow}
				onHide={() => setModalShow(false)}
				backdrop="static"
				keyboard={false}
			/>
		</>
	);
}

export default EditAccount





