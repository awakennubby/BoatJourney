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
            <Container fluid className="Exp_sections">
                <h2 class="MainHeaders" id="EducationHeader"><span>Education</span></h2>
                <ul class="BulletPointsList">
                    <li class="ExpBulletPoints">
                        <Education School="University of California, Davis" 
                        DateStart="Sept 2018" 
                        DateEnd="Mar 2022" 
                        DegreeTitle="Bachelor of Science, Computer Science" 
                        Description="At UC Davis, I took several courses including: Data Structures and Algorithms, Object-Oriented Programming, Algorithm Design and Analysis,
                        Prob and Stats for CS, Computer Architecture, Information Interfaces, Database Systems, Operating Systems, Study of Programming Languages/Compliers "
                        BulletPoints={[]}/>
                    </li>
                    <li class="ExpBulletPoints">
                        <Education School="Udemy"
                        DateStart="June 2020"
                        DateEnd="Aug 2020"
                        DegreeTitle="Python and Django Full Stack Web Developer Bootcamp"
                        Description="During this course, I learned the basics of web development using Django. In addition to this, 
                        the course taught me how to use: HTML, CSS, Javascript, JQuery, Bootstrap, and SQLite."
                        />
                    </li>
                    <li class="ExpBulletPoints">
                        <Education School="Garden Grove High School" 
                        DateStart="Aug 2014" 
                        DateEnd="Jun 2018" 
                        DegreeTitle="High School Diploma" 
                        Description="My first introduction to programming! In highschool, I had the privilege to tinker with Java."
                        BulletPoints={[]}/>
                    </li>
                </ul>
            </Container>
        )
    }
}
  

  