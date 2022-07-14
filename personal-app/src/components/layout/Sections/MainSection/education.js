import React from 'react';
import ReactDOM from 'react-dom/client';
import {Card, Container, Row, Col} from 'react-bootstrap';
import CardHeader from 'react-bootstrap/CardHeader'
export default class Education extends React.Component{
    constructor(props){
        super(props);
        let education_info = {School: "None", DateStart: "Something", DateEnd:"Something", 
        DegreeTitle: "None", Description: "None", BulletPoints:"None"};
    }
    render(){
        return (
            <Container fluid>
            <Card.Body>
                <Row>
                    <Col>
                    <Card.Title>{this.props.School}</Card.Title>
                    </Col>
                    <Col>
                    <Card.Title>{this.props.DegreeTitle} </Card.Title>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Card.Subtitle> {this.props.DateStart} - {this.props.DateEnd}</Card.Subtitle>
                    </Col>
                    <Col><p>{this.props.Description}</p></Col>
                </Row>
                <Card.Text>
                {/*  <ul class="BulletPointsList">
                { this.props.BulletPoints.map((filterItem) => {
                    return (
                                <li class="BulletPoints" key={filterItem}>
                                    <span>{filterItem}</span>
                                </li>
                            );
                        })
                    }
                </ul>
                */}
                </Card.Text>
            </Card.Body>
            </Container>
        )
    }
}
  

  