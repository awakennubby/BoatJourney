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

        <Container fluid id="TopSection">
          <AboutMe id="AboutMeHeader"></AboutMe>
          {/* Add an a skills section and change formatting of photo */}
        </Container>

        <div id="MainSect">
          <div id="ExpSect">
              <Experience_Section></Experience_Section>
            </div>
          <div id="EdSect"> 
              <Education_Section></Education_Section>
            </div>
            <div id="ProjSect">
              <Project_Section></Project_Section>
            </div>
        </div>
        <div id="BottomSection">
        <ContactInfo></ContactInfo>
        </div>
    </div>
  );
}

export default App;
