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
import { Container, Row, Col } from 'react-bootstrap';
function App() {
  return (
    <div className="App">

      <Row>
      <MyNavBar></MyNavBar>
      </Row>

      <Row>
        <Container id="Introduction">
        <img src={SectionBackground} id="Section_ID"></img>
          <Container id="Name_Intro">
            <h1>Daniel D. Nguyen</h1>
            <hr class="solid"></hr>
            <p id="Intro_Desc">Software Engineer <span class="dot"></span> &nbsp;
            Music Producer <span class="dot"></span> &nbsp;
            Photographer</p>
          </Container>
        </Container>
      </Row>

      <Row>
        <Container fluid id="TopSection">
          <AboutMe id="AboutMeHeader"></AboutMe>
        </Container>
      </Row>

      <Row>
        <Container id="MainSection">
          <h2 class="MainHeaders" id="ExpHeader"><span>Experience</span></h2>
          <Experience_Section></Experience_Section>
          <h2 class="MainHeaders" id="EducationHeader"><span>Education</span></h2>
          <Education_Section></Education_Section>
          <h2 class="MainHeaders" id="ProjectHeader"><span>Projects</span></h2>
          <Project_Section></Project_Section>
        </Container>
      </Row>

      <Row>
        <Container fluid id="BottomSection">
          <ContactInfo></ContactInfo>
        </Container> 
      </Row>
      <div id="SpaceFiller"></div>
    </div>
  );
}

export default App;
