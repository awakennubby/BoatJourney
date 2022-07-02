import React from 'react';
import ReactDOM from 'react-dom/client';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GradPic from '../../../../assets/images/GradPic.jpeg'
export default class AboutMe extends React.Component{
    render(){
        return (
        <Container fluid>
        <h2 class="MainHeaders">About Me</h2>
        <Row>
            <Col>
                <p>Hi! I'm Daniel Nguyen, a recent Computer Science college graduate from the University of California, Davis.  I'm a curious developer who enjoys working with cool technology, regardless of the field! 
                I love learning new things and am currently trying out some cool new hobbies.
                I'm dabbling in several projects including: personal software projects, building out my own home server, music production, videography, and photography.
                Feel free to browse through my website to see what exciting things I've worked on or am currently working on!
                </p>
            </Col>
            <Col>
            <img src={GradPic} id="pfp"></img>
            </Col>
        </Row>
        </Container>
        )
    }
}