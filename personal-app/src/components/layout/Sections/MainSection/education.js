import React from 'react';
import ReactDOM from 'react-dom/client';
import Card from 'react-bootstrap/Card';
import CardHeader from 'react-bootstrap/CardHeader'
export default class Education extends React.Component{
    constructor(props){
        super(props);
        let education_info = {School: "None", DateStart: "Something", DateEnd:"Something", 
        DegreeTitle: "None", Description: "None", BulletPoints:"None"};
    }
    render(){
        return (
            <Card className="border-1 Card-Info text-center">
            <Card.Body>
                <CardHeader class="EducationCardHeader">
                <Card.Title>{this.props.School}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{this.props.DegreeTitle} </Card.Subtitle>
                <Card.Subtitle> {this.props.DateStart} - {this.props.DateEnd}</Card.Subtitle>
                </CardHeader>
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
            </Card>
        )
    }
}
  

  