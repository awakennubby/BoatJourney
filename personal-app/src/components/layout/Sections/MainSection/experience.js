import React from 'react';
import ReactDOM from 'react-dom/client';
import {Card,Container,Row,Col} from 'react-bootstrap';
import CardHeader from 'react-bootstrap/CardHeader'
export default class Experience extends React.Component{
    constructor(props){
        super(props);
        let experience_info = {Job: "None", DateStart: "Something", DateEnd:"Something", 
        JobTitle: "None", Description: "None", BulletPoints:"None"};
    }
    render(){
        return (
            <Container fluid>
            <Card.Body>
                <Row>
                    <Col>
                        <Card.Title>{this.props.Job}</Card.Title>
                    </Col>
                    <Col>
                        <Card.Title>{this.props.JobTitle} </Card.Title>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Card.Subtitle> {this.props.DateStart} - {this.props.DateEnd}</Card.Subtitle>
                    </Col>
                    <Col>
                     <Card.Text>
                <ul class="BulletPointsList">
                { this.props.BulletPoints.map((filterItem) => {
                    return (
                                <li class="BulletPoints" key={filterItem}>
                                    <span>{filterItem}</span>
                                </li>
                            );
                        })
                    }
                </ul>
                </Card.Text>
                    </Col>
                </Row>
            </Card.Body>
            </Container>
        )
    }
}
  

  