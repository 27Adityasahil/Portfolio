import NavbarComponent from "./Components/NavbarComponent";
import About from "./Components/About";
import Education from "./Components/Education";
import InstaPost from "./Components/InstaPost";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"

function App() {
  return (
    <div className="main-container">
      <NavbarComponent />
      <About />
      <div className="projects-section">
        
      </div>
      <div className="education-and-skills">
        <div className="skills-sec">
        <h3 className="section-head">Skills</h3>
          <InstaPost />
        </div>
        <div className="education-sec">
        <h3 className="section-head">Education</h3>
          <Education />
        </div>
      </div>
    </div>
  );
}

export default App;
