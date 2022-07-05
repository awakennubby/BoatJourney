import React from 'react';
import ReactDOM from 'react-dom/client';
import Card from 'react-bootstrap/Card';
import CardHeader from 'react-bootstrap/CardHeader'
export default class Experience extends React.Component{
    constructor(props){
        super(props);
        let experience_info = {Job: "None", DateStart: "Something", DateEnd:"Something", 
        JobTitle: "None", Description: "None", BulletPoints:"None"};
    }
    render(){
        return (
            <Card className="border-1 Card-Info text-center">
            <Card.Body>
                <Card.Title>{this.props.Job}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{this.props.JobTitle} </Card.Subtitle>
                <Card.Subtitle> {this.props.DateStart} - {this.props.DateEnd}</Card.Subtitle>
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
            </Card.Body>
            </Card>
        )
    }
}
  

  