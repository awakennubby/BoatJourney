import React from 'react';
import ReactDOM from 'react-dom/client';
import {Card,Container,Button} from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import CardHeader from 'react-bootstrap/CardHeader'
import Coffee_Visual from '../../../../assets/images/Coffee_Visual.png'
export default class Project extends React.Component{
    constructor(props){
        super(props);
        let project_info = {ProjectName: "None", Description: "None", BulletPoints:"None",
        Links: "None"};
    }
    render(){
        return (
            <Card style={{ width: '18rem', border_color:'black' }} className="border-4 project_card">
            <Card.Img variant="top" src={Coffee_Visual} className='myImages' />
            <Card.Body className="project_body">
                <Card.Title>
                {this.props.ProjectName}
                </Card.Title>
                <Card.Text>
                {this.props.Description}
                </Card.Text>
                <Button variant="primary">
                    <a href={this.props.Links} className="ProjectLink">Project Link</a>
                </Button>
            </Card.Body>
            </Card>
        )
    }
}
  

  