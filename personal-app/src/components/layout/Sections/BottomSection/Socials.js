import React from 'react';
import ReactDOM from 'react-dom/client';
import { NavDropdown,Nav,Navbar,Container,Image } from 'react-bootstrap';
import Github_Logo from '../../../../assets/images/Github_Logo.png';
import Gmail_Logo from '../../../../assets/images/Gmail_Logo.png';
import LinkedIn_Logo from '../../../../assets/images/LinkedIn_Logo.png'
export default class ContactInfo extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Container fluid id="Contact_Info">
                <h2 id="ContactHeader" className='MainHeaders'>
                    <span id="ContactHeaderSpan">Contact</span>
                    </h2>
                <ul id="Socials_list">
                    <li class="Social_Link">
                        <a href="https://github.com/awakennubby">
                            <Image src={Github_Logo} rounded responsive id="Github_Logo"></Image>
                        </a>
                    </li>
                    <li class="Social_Link">
                        <a href="https://www.linkedin.com/in/daniel-nguyen-a8a799177/">

                            <Image src={LinkedIn_Logo} rounded responsive id="Linkedin_Logo"></Image>
                        </a>
                    </li>
                    <li class="Social_Link">
                        <a href="mailto: codenubby@gmail.com">
                            <Image src={Gmail_Logo} rounded responsive id="Gmail_Logo"></Image>
                        </a>
                    </li>
                </ul>
            </Container>
        )
    }
}