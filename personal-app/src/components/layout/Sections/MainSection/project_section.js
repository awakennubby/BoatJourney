import React from 'react';
import ReactDOM from 'react-dom/client';
import Container from 'react-bootstrap/Container';
import Project from './project';
export default class Project_Section extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Container className="Exp_sections">
                <ul class="BulletPointsList">
                    <li class="ExpBulletPoints">
                        <Project ProjectName="Cuckoo For Coffee" 
                        Description="An interactive visual that displays different qualities of coffee beans reviewed by the Coffee 
                        Quality Institute."
                        BulletPoints={["Developed a column-based relational database with ACID properties using Python and OOP concepts.",
                        "Implemented Python’s threading module allowing for concurrent access to the database.",
                        "Integrated a cache for handling user transactions by collaborating with team members."]}
                        Links='https://github.com/awakennubby/CoffeeVisualization/tree/master/ecs163-w21-final-project-ecs_163_cupheads-master'/>
                    </li>
                </ul>
            </Container>
        )
    }
}
  

  