import React from 'react';
import ReactDOM from 'react-dom/client';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default class AboutMe extends React.Component{
    render(){
        return (
            <Container fluid>
                <Row>
                    <Col>1 of 4</Col>
                    <Col>2 of 4</Col>
                    <Col>3 of 4</Col>
                    <Col>4 of 4</Col>
                    <Col>4 of 4</Col>
                    <Col>4 of 4</Col>
                </Row>
                <Row>
                    <Col>1 of 4</Col>
                    <Col>2 of 4</Col>
                    <Col>3 of 4</Col>
                    <Col>4 of 4</Col>
                </Row>
                <Row>
                    <Col>1 of 4</Col>
                    <Col>2 of 4</Col>
                    <Col>3 of 4</Col>
                    <Col>4 of 4</Col>
                </Row>
            </Container>
        )
    }
}