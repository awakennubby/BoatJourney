//import './App.css';
import './myCustom.css'
import './components/layout/Sections/MainSection/experience'
import AboutMe from './components/layout/Sections/TopSection/AboutMe';
import Experience_Section from './components/layout/Sections/MainSection/experience_section';
import Education_Section from './components/layout/Sections/MainSection/education_section'
import Project_Section from './components/layout/Sections/MainSection/project_section';
import { Container } from 'react-bootstrap';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AboutMe></AboutMe>
      </header>
      <Container id="MainSection">
        <h2 class="MainHeaders" id="ExpHeader"><span>Experience</span></h2>
        <Experience_Section></Experience_Section>
        <h2 class="MainHeaders" id="EducationHeader"><span>Education</span></h2>
        <Education_Section></Education_Section>
        <h2 class="MainHeaders" id="ProjectHeader"><span>Projects</span></h2>
        <Project_Section></Project_Section>
      </Container>
    </div>
  );
}

export default App;
