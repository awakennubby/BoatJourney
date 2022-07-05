import React from 'react';
import ReactDOM from 'react-dom/client';
import { NavDropdown,Nav,Navbar,Container } from 'react-bootstrap';
import MyLogo from '../../../assets/images/MyLogo.png';
export default class MyNavBar extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Navbar sticky="top" bg="light" expand="lg">
                <Navbar.Brand><img src={MyLogo} id="PersonalLogo"></img></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#AboutMeHeader">Profile</Nav.Link>
                    <Nav.Link href="#ExpHeader">Experiences</Nav.Link>
                    <Nav.Link href="#SkillsHeader">Skills</Nav.Link>
                    <Nav.Link href="#ProjectHeader">Projects</Nav.Link>
                    <Nav.Link href="#ContactInfo">Contact</Nav.Link>
                    <NavDropdown title="Other Stuff!" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Music Production</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Photography Portfolio</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>  
            </Navbar>
        )
    }
}