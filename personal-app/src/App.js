//import './App.css';
import './components/layout/Sections/MainSection/experience'
import AboutMe from './components/layout/Sections/TopSection/AboutMe';
import Experience_Section from './components/layout/Sections/MainSection/experience_section';
import './myCustom.css'
function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <h2 id="ExpHeader">Experience</h2>
      <Experience_Section></Experience_Section>
      <h2 id="EducationHeader">Education</h2>
      <Experience_Section></Experience_Section>
      <h2 id="ProjectHeader">Projects</h2>
      <Experience_Section></Experience_Section>
    </div>
  );
}

export default App;
