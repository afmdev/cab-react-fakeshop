import React, { useContext, useState } from "react";
import { Container, Navbar, Nav, Offcanvas, Button, Link } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap'
import { AuthContext } from "../context/authContext";
import { CartPlus } from 'react-bootstrap-icons';


function Menu() {

    const { user, setUser } = useContext(AuthContext)

    const login = () => {
        setUser({userName:"Raúl"})
        console.log(user)
    }
    const logout = () => {
        setUser(null)
        console.log(user)
    }

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
        <Navbar className="d-none d-md-flex d-sm-block p-0">
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
                ? (<span>{user.userName}{' '}<CartPlus size={20} /></span>) 
                : (<div><Button variant="danger" size="sm" onClick={login}>login</Button>{' '}<Button variant="success" size="sm" onClick={logout}>register</Button></div>)
                }
            </div>
            </Nav>
        </Navbar>
    </div>
        <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <LinkContainer to="/"><Nav.Link onClick={handleClose}>Home</Nav.Link></LinkContainer>
                <LinkContainer to="/shop"><Nav.Link onClick={handleClose}>Shop</Nav.Link></LinkContainer>
                <LinkContainer to="/chat"><Nav.Link onClick={handleClose}>Chat</Nav.Link></LinkContainer>
                <LinkContainer to="/contact"><Nav.Link onClick={handleClose}>Contact</Nav.Link></LinkContainer>
                <LinkContainer to="/login"><Nav.Link onClick={handleClose}>Login/Register</Nav.Link></LinkContainer>
            </Offcanvas.Body>
        </Offcanvas>
    </Navbar>
    )
}

export default Menu;

