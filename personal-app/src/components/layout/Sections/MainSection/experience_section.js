import React from 'react';
import ReactDOM from 'react-dom/client';
import Button from 'react-bootstrap/Button';
import Experience from './experience';
export default class Experience_Section extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <ul class="BulletPointsList">
                <li class="ExpBulletPoints">
                    <Experience Job="LibreTexts" 
                    DateStart="Jan 2022" 
                    DateEnd="June 2022" 
                    JobTitle="Site Reliability Engineer" 
                    Description="Meh"
                    BulletPoints={["Responsible for maintaining a Kubernetes cluster that runs LibreTexts, JupyterHub, and BinderHub; services that allows instructors and students to write and execute code online",
                    "Learned Prometheus, Puppet, Grafana, Helm, Docker to support the Kubernetes cluster",
                    "Developed a queueing system in Python and launched a web application using Flask"]}/>
                </li>
                <li class="ExpBulletPoints">
                    <Experience Job="HCL Technologies" 
                    DateStart="Sept 2021" 
                    DateEnd="Dec 2021" 
                    JobTitle="Software Engineering Intern" 
                    Description="Meh"
                    BulletPoints={["Point1","Point2","Point3"]}/>
                </li>
                <li class="ExpBulletPoints">
                    <Experience Job="University of Oldenburg" 
                    DateStart="June 2021" 
                    DateEnd="Sept 2021" 
                    JobTitle="PHP Developer Intern" 
                    Description="Meh"
                    BulletPoints={["Point1","Point2","Point3"]}/>
                </li>
                <li class="ExpBulletPoints">
                    <Experience Job="University of California, Davis" 
                    DateStart="June 2020" 
                    DateEnd="Sept 2020" 
                    JobTitle="Research Intern" 
                    Description="Meh"
                    BulletPoints={["Point1","Point2","Point3"]}/>
                </li>
            </ul>
        )
    }
}
  

  