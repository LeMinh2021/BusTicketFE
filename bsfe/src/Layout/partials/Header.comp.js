import React from 'react'
import {Navbar ,Nav} from 'react-bootstrap'
import BusLogoFinal from '../../assets/img/BusLogoFinal.png'
import logo from '../../assets/img/logo.png'
export const Header = () => {
    return (
        <Navbar
            collapseOnSelect
            bg="dark"
            variant="dark"
            expand="md"

        >
            <Navbar.Brand>
                <img src={logo} alt="logo" width="100px"></img>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav"/>

            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                    <Nav.Link href="/dashboard">Ticket</Nav.Link>
                    <Nav.Link href="/dashboard">Logout</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            
        </Navbar>
    )
}
