import React from 'react';
import ReactDOM from 'react-dom/client';
import { NavDropdown,Nav,Navbar,Container } from 'react-bootstrap';
import Github_Logo from '../../../../assets/images/Github_Logo.png';
import Gmail_Logo from '../../../../assets/images/Gmail_Logo.png';
import LinkedIn_Logo from '../../../../assets/images/LinkedIn_Logo.png'
export default class ContactInfo extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Container id="Contact_Info">
                <h2 id="ContactHeader" className='MainHeaders'>
                    <span id="ContactHeaderSpan">Contact</span>
                    </h2>
                <ul id="Socials_list">
                    <li class="Social_Link">
                        <a href="https://github.com/awakennubby">
                            <img src={Github_Logo}></img>
                        </a>
                    </li>
                    <li class="Social_Link">
                        <a href="https://www.linkedin.com/in/daniel-nguyen-a8a799177/">
                            <img src={LinkedIn_Logo} width="120" height="110"></img>
                        </a>
                    </li>
                    <li class="Social_Link">
                        <a href="mailto: codenubby@gmail.com">
                            <img src={Gmail_Logo} width="120" height="auto" id="Gmail_Logo"></img>
                        </a>
                    </li>
                </ul>
            </Container>
        )
    }
}