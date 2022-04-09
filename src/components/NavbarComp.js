import React from 'react'
import { Navbar, Nav, Form, Button, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';


export default function NavbarComp() {
    const balance = useSelector(state => state.amount);
    
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="/">Shopper</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                        </Nav>
                        <Form className="d-flex">
                            <Button disabled variant="outline-success">Balance: {balance}</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
