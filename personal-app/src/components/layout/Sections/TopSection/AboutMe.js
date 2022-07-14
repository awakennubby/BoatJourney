import React from 'react';
import ReactDOM from 'react-dom/client';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GradPic from '../../../../assets/images/GradPic.jpg'
export default class AboutMe extends React.Component{
    render(){
        return (
        <Container fluid id="AboutMeSect">
            <Container fluid id="AboutMeTop">
            <h2 class="MainHeaders" id="AboutMeHeader">About Me</h2>
            <img src={GradPic} id="pfp"></img>
            </Container>
            <Container>
            <p> Hi! I'm Daniel, a recent Computer Science graduate from the University of California, Davis and an incoming Software Engineering for SAP. 
            I'm a curious developer who enjoys working with cool technology and exploring the many different facets that this field has to offer! 
            In my own personal life, I love learning new things and am currently trying out some cool new hobbies.
            I'm currently dabbling in several projects including: personal software projects, building out my own home server, music production, videography, and photography.</p>
            </Container>
        </Container>
        )
    }
}