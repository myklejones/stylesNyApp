import React from 'react'
import {Nav, Navbar} from 'react-bootstrap'
import styled from 'styled-components'

const Styles = styled.div`
.navbar {
    background-color: pink;
    height: 10;
}

.navbar-brand, .navbar-nav .nav-link{
    color: grey;

    &hover {
        color: pink;
    }
} 

`;

export const NavigationBar = ( ) =>(
    
    <Styles>
        <Navbar expand="lg"bg="light" variant="light">
            <Navbar.Brand href="/" >StylesNy</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic" />
            <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="ml-auto" >
                <Nav.Item><Nav.Link href="/" >Home</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link  >Locations</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/login">Login</Nav.Link></Nav.Item>

            </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)