import React from 'react';
import ReactDOM from 'react-dom/client';
import Container from 'react-bootstrap/Container';
import Experience from './experience';
export default class Experience_Section extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Container className="Exp_sections" id="ExpLink">
                <ul class="BulletPointsList">
                <li class="ExpBulletPoints">
                    <Experience Job="SAP"
                    DateStart="Janurary 2023"
                    DateEnd="Current"
                    JobTitle="Incoming Software Engineer"
                    Description="Meh"
                    BulletPoints={[]}
                    />
                </li>
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
                    BulletPoints={["Developed a RESTful travel destination service utilizing Java Springboot, MySQL, and hosted on AWS.",
                    "Learned Java, Spring Framework, Docker, Kubernetes, AWS, and Devops fundamentals to build software solutions for HCL.",
                    "Practiced Agile development in order to effectively prioritize tasks and divide work amongst team members."]}/>
                </li>
                <li class="ExpBulletPoints">
                    <Experience Job="University of Oldenburg" 
                    DateStart="June 2021" 
                    DateEnd="Sept 2021" 
                    JobTitle="PHP Developer Intern" 
                    Description="Meh"
                    BulletPoints={["Developed web pages utilizing PHP, Javascript, Leaflet, and Professor Grosses PHP codebase in order to effectively display predictive ice cap formations in Antarctica."
                    ,"Implemented a MySQL database to store user information for login authentication.",
                    "Utilized XAMPP(Apache, MySQL) to host web server and run website for testing."]}/>
                </li>
                <li class="ExpBulletPoints">
                    <Experience Job="University of California, Davis" 
                    DateStart="June 2020" 
                    DateEnd="Sept 2020" 
                    JobTitle="Research Intern" 
                    Description="Meh"
                    BulletPoints={["Developed multiple types of simulations to support the ENIGMA paper.",
                    "Utilized the Julia programming language in order to display meaningful graphs and integrated statistical concepts.",
                    "Collaborated with team members to effectively divide up tasks, set deadlines, and coordinated team meetings."]}/>
                </li>
                
            </ul>
            </Container>
        )
    }
}
  

  