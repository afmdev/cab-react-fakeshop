import React, { useState } from "react";
import { Container, Navbar, Nav, Offcanvas, Button } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap'


function Menu() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (


        <Navbar bg="light" expand="lg">

        <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>
                    <img alt="React Fakeshop" src="/afm.svg" width="30" height="30" className="d-inline-block align-top" />{' '}</Navbar.Brand></LinkContainer>
                  <Button variant="primary d-sm-none" onClick={handleShow}>
        Launch
      </Button>
        <Navbar className="d-none d-sm-block">
            <Nav>
                <LinkContainer to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
                <LinkContainer to="/shop"><Nav.Link>Shop</Nav.Link></LinkContainer>
                <LinkContainer to="/chat"><Nav.Link>Chat</Nav.Link></LinkContainer>
                <LinkContainer to="/contact"><Nav.Link>Contact</Nav.Link></LinkContainer>
                <LinkContainer to="/login"><Nav.Link>Login/Register</Nav.Link></LinkContainer>
            </Nav>
        </Navbar>
    </Container>
        <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <LinkContainer to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
                <LinkContainer to="/shop"><Nav.Link>Shop</Nav.Link></LinkContainer>
                <LinkContainer to="/chat"><Nav.Link>Chat</Nav.Link></LinkContainer>
                <LinkContainer to="/contact"><Nav.Link>Contact</Nav.Link></LinkContainer>
                <LinkContainer to="/login"><Nav.Link>Login/Register</Nav.Link></LinkContainer>
            </Offcanvas.Body>
        </Offcanvas>
    </Navbar>
    )
}

export default Menu;

