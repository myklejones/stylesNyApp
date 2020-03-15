import React from 'react'
import {Nav, Navbar} from 'react-bootstrap'
import styled from 'styled-components'

const Styles = styled.div`
.navbar {
    background-color: pink;
}

.navbar-brand, .navbar-nav .nav-link{
    color: red;

    &hover {
        color: pink;
    }
} 

`;

export const NavigationBar = () =>(
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand href="/" >stylesNy</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic" />
            <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="ml-auto" >
                <Nav.Item><Nav.Link>Home</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link>About</Nav.Link></Nav.Item>

            </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)