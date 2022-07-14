import React from 'react';
import ReactDOM from 'react-dom/client';
import { NavDropdown,Nav,Navbar,Container,Image } from 'react-bootstrap';
import githubIcon from '../../../../assets/icons/githubIcon.svg';
import gmailLogo from '../../../../assets/images/gmailLogo.svg';
import linkedinLogo from '../../../../assets/images/linkedinLogo.svg'
export default class ContactInfo extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div id="Contact_Info">
                <h2 id="ContactHeader" className='MainHeaders'>
                    <span id="ContactHeaderSpan">Contact</span>
                </h2>
                <ul id="Socials_list">
                    <li class="Social_Link">
                        <a href="https://github.com/awakennubby">
                            <Image src={githubIcon}responsive id="Github_Logo"></Image>
                        </a>
                    </li>
                    <li class="Social_Link">
                        <a href="https://www.linkedin.com/in/daniel-nguyen-a8a799177/">
                            <Image src={linkedinLogo} responsive id="Linkedin_Logo"></Image>
                        </a>
                    </li>
                    <li class="Social_Link">
                        <a href="mailto: codenubby@gmail.com">
                            <Image src={gmailLogo} responsive id="Gmail_Logo"></Image>
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}