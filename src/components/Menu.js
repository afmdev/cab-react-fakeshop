import React, { useContext, useEffect, useState } from "react";
import { Navbar, Nav, Offcanvas, Button } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap'
import { AuthContext } from "../context/authContext";
import { Bug, ChatText, House, Person, PersonCircle, Shop } from 'react-bootstrap-icons';
import { Link } from "react-router-dom";
import OpenModal from './OpenModal'


function Menu() {

	const { user, setUser, logout, userUpdate, updatedUser } = useContext(AuthContext)
	console.log('user menu', user)
	console.log('updated menu', updatedUser)

	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);


	return (


		<Navbar bg="light" expand="lg">

			<div className="container-xxl">
				<Navbar.Brand className="d-flex align-items-center navbar-fakeshop p-0">
					{/*<Button variant="primary d-sm-none" onClick={handleShow}>Menu</Button>*/}
					<button type="button" className="navbar-toggler d-sm-none me-2" onClick={handleShow}><span className="navbar-toggler-icon"></span></button>
					{' '}
					<LinkContainer to="/">
						<Nav.Link className="p-0"><img alt="React Fakeshop" src="/afm.svg" className="d-inline-block align-top logo" width="38px" height="38px" /></Nav.Link>
					</LinkContainer>
				</Navbar.Brand>
				<Navbar className="d-none d-sm-flex d-sm-block p-0">
					<Nav>
						<LinkContainer to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
						<LinkContainer to="/shop"><Nav.Link>Shop</Nav.Link></LinkContainer>
						<LinkContainer to="/chat"><Nav.Link>Chat</Nav.Link></LinkContainer>
						<LinkContainer to="/contact"><Nav.Link>Contact</Nav.Link></LinkContainer>
					</Nav>
				</Navbar>

				<Navbar className="ms-auto p-0">
					<Nav>
						<div>
							{user
								? (<div className="d-flex align-items-center username"><Link to="/my-account" className="text-decoration-none text-reset">

									{user.photoURL === null ? <PersonCircle size={25} className="m-1" /> : <img src={user.photoURL} alt={user.email} width="25px" heigth="25px" />}

									{' '}<span className="pe-2 fs-6 font-monospace">

										{user.displayName === null ? `${user.email}` : `${user.displayName}`}


									</span></Link>{'|'}<OpenModal /></div>)
								: (<div><Link to="/login"><Button variant="danger" size="sm">login</Button></Link>{' '}<Link to="/register"><Button variant="dark" size="sm">register</Button></Link></div>)
							}
							{/* {user
								? (<div className="d-flex align-items-center username"><Link to="/my-account" className="text-decoration-none text-reset"><PersonCircle size={20} className="m-1" />{' '}<span className="pe-2 fs-6 font-monospace">{user.email} </span></Link>{'|'}<Button variant="link" size="sm" className="ps-2" onClick={logout}><BoxArrowRight size={20} /></Button></div>)
								: (<div><Link to="/login"><Button variant="danger" size="sm">login</Button></Link>{' '}<Link to="/register"><Button variant="dark" size="sm">register</Button></Link></div>)
							} */}
						</div>
					</Nav>
				</Navbar>
			</div>
			<Offcanvas show={show} onHide={handleClose} >
				<Offcanvas.Header closeButton>
					<Offcanvas.Title>Menu</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
					<LinkContainer to="/"><Nav.Link onClick={handleClose}><House size={25} className="menu-icons" />Home</Nav.Link></LinkContainer>
					<LinkContainer to="/shop"><Nav.Link onClick={handleClose}><Shop size={25} className="menu-icons" />Shop</Nav.Link></LinkContainer>
					<LinkContainer to="/chat"><Nav.Link onClick={handleClose}><ChatText size={25} className="menu-icons" />Chat</Nav.Link></LinkContainer>
					<LinkContainer to="/url-does-not-exist"><Nav.Link onClick={handleClose}><Bug size={25} className="menu-icons" />No Exist Link</Nav.Link></LinkContainer>
					<LinkContainer to="/my-account"><Nav.Link onClick={handleClose}><Person size={25} className="menu-icons" />My Account</Nav.Link></LinkContainer>
				</Offcanvas.Body>
			</Offcanvas>
		</Navbar>
	)
}

export default Menu;

