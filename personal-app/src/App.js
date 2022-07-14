import './App.css';
//import './myCustom.css'
import './components/layout/Sections/MainSection/experience'
import SectionBackground from './assets/images/SectionBackground.JPG'
import AboutMe from './components/layout/Sections/TopSection/AboutMe';
import Experience_Section from './components/layout/Sections/MainSection/experience_section';
import Education_Section from './components/layout/Sections/MainSection/education_section'
import Project_Section from './components/layout/Sections/MainSection/project_section';
import MyNavBar from './components/layout/navbar/myNavBar';
import ContactInfo from './components/layout/Sections/BottomSection/Socials';
import Skills from './components/layout/Sections/TopSection/Skills';

import { Container, Row, Col,Image } from 'react-bootstrap';
function App() {
  return (
    <div className="App">
      <MyNavBar></MyNavBar>

        <div fluid id="Introduction">
        <img src={SectionBackground} id="Section_ID"></img>
          <Container fluid id="Name_Intro">
            <h1>Daniel D. Nguyen</h1>
            <hr class="solid"></hr>
            <p id="Intro_Desc">Software Engineer <span class="dot"></span> &nbsp;
            Music Producer <span class="dot"></span> &nbsp;
            Photographer</p>
          </Container>
        </div>

        <div id="TopSection">
            <Container fluid>
            <Row>
            <Col><AboutMe id="AboutMeHeader"></AboutMe></Col>
            <Col><Skills></Skills></Col>
            </Row>
            </Container>
          {/* Add an a skills section and change formatting of photo */}
        </div>


        <div id="MainSect">
          <div id="ExpSect">
            <Container>
              <Experience_Section></Experience_Section>
            </Container>
            </div>
          <div id="EdSect"> 
            <Container>
              <Education_Section></Education_Section>
            </Container>
            </div>
          <div id="ProjSect">
            <Container>
              <Project_Section></Project_Section>
            </Container>
          </div>
        </div>

        <div id="BottomSection">
          <Container>
            <ContactInfo></ContactInfo>
            <p>All logos taken from <a href='https://www.icons8.com'> icons8 </a></p>
          </Container>

        </div>
    </div>
  );
}

export default App;
