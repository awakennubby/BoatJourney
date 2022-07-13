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
            <Container fluid className="Exp_sections" id="ExpLink">
            <h2 class="MainHeaders" id="ExpHeader">Experience</h2>
                <ul class="BulletPointsList">
                <li class="ExpBulletPoints">
                    <Experience Job="SAP"
                    DateStart="Jan 2023"
                    DateEnd="Current"
                    JobTitle="Incoming Software Engineer"
                    Description="I'm a new hire, but will be working in backend development!"
                    BulletPoints={[]}
                    />
                </li>
                <li class="ExpBulletPoints">
                    <Experience Job="LibreTexts" 
                    DateStart="Jan 2022" 
                    DateEnd="Jun 2022" 
                    JobTitle="Site Reliability Engineer" 
                    Description="During my time at LibreTexts, I worked on a Kubernetes Job queueing application, worked on a web
                     application that would allow researchers to use AlphaFold2, and worked on supporting the UC Davis JuypterHub . Additionally, I learned how to use
                     Grafana, Helm, Puppet, IPMI, Prometheus, and Docker to support our various Kubernetes clusters."
                    BulletPoints={["Responsible for maintaining a Kubernetes cluster that runs LibreTexts, JupyterHub, and BinderHub; services that allows instructors and students to write and execute code online",
                    "Learned Prometheus, Puppet, Grafana, Helm, Docker to support the Kubernetes cluster",
                    "Developed a queueing system in Python and launched a web application using Flask"]}/>
                </li>
                <li class="ExpBulletPoints">
                    <Experience Job="HCL Technologies" 
                    DateStart="Sept 2021" 
                    DateEnd="Dec 2021" 
                    JobTitle="Software Engineering Intern" 
                    Description="While working at HCL Technologies, my team developed a micro-service orientated Java Springboot travel destination web application, which
                    we hosted on AWS. Additionally, during the internship I learned how to use Kubernetes, Docker, and worked using Agile principles."
                    BulletPoints={["Developed a RESTful travel destination service utilizing Java Springboot, MySQL, and hosted on AWS.",
                    "Learned Java, Spring Framework, Docker, Kubernetes, AWS, and Devops fundamentals to build software solutions for HCL.",
                    "Practiced Agile development in order to effectively prioritize tasks and divide work amongst team members."]}/>
                </li>
                <li class="ExpBulletPoints">
                    <Experience Job="University of Oldenburg" 
                    DateStart="Jun 2021" 
                    DateEnd="Sept 2021" 
                    JobTitle="PHP Developer Intern" 
                    Description="While working under Professor Thilo Gross for a second summer, I assisted him in building a web application that would display predictive ice cap formations in Antarctica. 
                    During my time, I honed my skills in: PHP, Javascript, Leaflet, and MySQL. "
                    BulletPoints={["Developed web pages utilizing PHP, Javascript, Leaflet, and Professor Grosses PHP codebase in order to effectively display predictive ice cap formations in Antarctica."
                    ,"Implemented a MySQL database to store user information for login authentication.",
                    "Utilized XAMPP(Apache, MySQL) to host web server and run website for testing."]}/>
                </li>
                <li class="ExpBulletPoints">
                    <Experience Job="University of California, Davis" 
                    DateStart="Jun 2020" 
                    DateEnd="Sept 2020" 
                    JobTitle="Research Intern" 
                    Description="Working under Professor Thilo Gross, my team member and I developed multiple types of simulations to support the Project ENIGMA paper.
                    Using Julia's various libraries and applying data science practices, we created meaningful graphs to support the ENIGMA paper's findings."
                    BulletPoints={["Developed multiple types of simulations to support the ENIGMA paper.",
                    "Utilized the Julia programming language in order to display meaningful graphs and integrated statistical concepts.",
                    "Collaborated with team members to effectively divide up tasks, set deadlines, and coordinated team meetings."]}/>
                </li>
                
            </ul>
            </Container>
        )
    }
}
  

  