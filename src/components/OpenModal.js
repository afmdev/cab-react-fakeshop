import React, { useContext, useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { BoxArrowRight } from 'react-bootstrap-icons'
import { AuthContext } from '../context/authContext'

function MyVerticallyCenteredModal(props) {

	const { user, logout } = useContext(AuthContext)

	return (
		<Modal
			{...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Body className="text-center">
				<h4>Hey {user.email},</h4>
				<p>
					Do you really want to log out or did you click on the icon by accident?
				</p>
				<Button onClick={props.onHide}>ACCIDENT!</Button>{' '}
				<Button onClick={props.onHide, logout}>LOGOUT!</Button>
			</Modal.Body>
		</Modal>
	);
}

function OpenModal() {
	const [modalShow, setModalShow] = useState(false);

	return (
		<>

			<Button variant="link" size="sm" className="ps-2" onClick={() => setModalShow(true)}><BoxArrowRight size={20} /></Button>

			<MyVerticallyCenteredModal
				show={modalShow}
				onHide={() => setModalShow(false)}
				backdrop="static"
				keyboard={false}
			/>
		</>
	);
}

export default OpenModal














// import React from "react";
// // import { Button, Modal } from "react-bootstrap";
// import "../index.css";

// function Modal(props) {
//   return (
//     <div className="modal-container">
//         <a href={"#open-modal-"+props.id}>Open Modal</a>
//         <div id={"open-modal-"+props.id} className="modal-window">
//         <div>
//           <a href="#modal-close" title="Close" className="modal-close">close &times;</a>
//           <h2>{props.title}</h2>
//           <div><img src={props.image} alt={props.title}></img></div>
//           <div>price: {props.price}</div>
//           <div>Description: {props.description}</div>
//         </div>
//         </div>
//       </div>);
// }
// export default Modal;
