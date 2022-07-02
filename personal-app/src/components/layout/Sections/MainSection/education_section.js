import React from 'react';
import ReactDOM from 'react-dom/client';
import Container from 'react-bootstrap/Container';
import Education from './education';
export default class Education_Section extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Container className="Exp_sections">
                <ul class="BulletPointsList">
                    <li class="ExpBulletPoints">
                        <Education School="University of California, Davis" 
                        DateStart="2018" 
                        DateEnd="2022" 
                        DegreeTitle="Bachelor of Science, Computer Science" 
                        Description="Meh"
                        BulletPoints={["Responsible for maintaining a Kubernetes cluster that runs LibreTexts, JupyterHub, and BinderHub; services that allows instructors and students to write and execute code online",
                        "Learned Prometheus, Puppet, Grafana, Helm, Docker to support the Kubernetes cluster",
                        "Developed a queueing system in Python and launched a web application using Flask"]}/>
                    </li>
                    <li class="ExpBulletPoints">
                        <Education School="Garden Grove High School" 
                        DateStart="2014" 
                        DateEnd="2018" 
                        DegreeTitle="High School Diploma" 
                        Description="Meh"
                        BulletPoints={["Responsible for maintaining a Kubernetes cluster that runs LibreTexts, JupyterHub, and BinderHub; services that allows instructors and students to write and execute code online",
                        "Learned Prometheus, Puppet, Grafana, Helm, Docker to support the Kubernetes cluster",
                        "Developed a queueing system in Python and launched a web application using Flask"]}/>
                    </li>
                </ul>
            </Container>
        )
    }
}
  

  