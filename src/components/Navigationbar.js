import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
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



function Navigationbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="#">Navbar</a>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}
export default Navigationbar;

// export   const NavigationBar = ( ) =>(

    // <Styles>
    //     <Navbar expand="lg"bg="light" variant="light">
    //         <Navbar.Brand href="/" >StylesNy</Navbar.Brand>
    //         <Navbar.Toggle aria-controls="basic" />
    //         <Navbar.Collapse id="basic-navbar-nav" >
    //         <Nav className="ml-auto" >
    //             <Nav.Item><Nav.Link href="/" >Home</Nav.Link></Nav.Item>
    //             <Nav.Item><Nav.Link  >Locations</Nav.Link></Nav.Item>
    //             <Nav.Item><Nav.Link href="/login">Login</Nav.Link></Nav.Item>

    //         </Nav>
    //         </Navbar.Collapse>
    //     </Navbar>
    // </Styles>

// )