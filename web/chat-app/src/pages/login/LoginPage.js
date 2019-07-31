import './LoginPage.css';
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Common = require('../../Common');

class LoginPage extends React.Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">
                { Common.APP_NAME }
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                
            </Navbar.Collapse>
            <Nav>
                <Nav.Link href="#">About</Nav.Link>
                <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
            </Navbar>
        );
    }
}

export default LoginPage;