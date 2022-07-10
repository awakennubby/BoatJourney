import React from 'react';
import ReactDOM from 'react-dom/client';
import {Card,Container} from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import CardHeader from 'react-bootstrap/CardHeader'
import Coffee_Visual from '../../../../assets/images/Coffee_Visual.png'
export default class Project extends React.Component{
    constructor(props){
        super(props);
        let education_info = {ProjectName: "None", Description: "None", BulletPoints:"None",
        Links: "None"};
    }
    render(){
        return (
            <Container fluid>
            <Card.Body>
                <Card.Title>{this.props.ProjectName}</Card.Title>
                <Card.Text>
                {/* <ul class="BulletPointsList">
                { this.props.BulletPoints.map((filterItem) => {
                    return (
                                <li class="BulletPoints" key={filterItem}>
                                    <span>{filterItem}</span>
                                </li>
                            );
                        })
                    }
                </ul> */}
                {this.props.Description}
                <br></br>
                <Image src={Coffee_Visual} rounded responsive className='myImages'></Image>
                <br></br>
                <a href={this.props.Links}>CoffeeVisualization</a>
                </Card.Text>
            </Card.Body>
            </Container>
        )
    }
}
  

  