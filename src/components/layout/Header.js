import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';
import '../../assets/global.css'


// regular navbar
const Header = (props) => {
    return (
        <>
            <Navbar collapseOnSelect className="nav-color" expand="lg">
                <Navbar.Brand as={Link} to="/"> <span style={{ color: "#f26419" }}>EPTracker</span> </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto mr-3">
                        <Nav.Link as={Link} to="/"><span style={{ color: "#f26419" }}>EP2</span></Nav.Link>
                        <Nav.Link as={Link} to="/hooks"><span style={{ color: "#f26419" }}>Hunt</span></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};
export default Header
