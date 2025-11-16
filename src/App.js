
import './App.css';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import About from './About';
import Skills from './Skills'
import Education from './Education';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <About></About>
      <Skills></Skills>
      <Education></Education>
      <Contact></Contact>

    </div>
  );
}

export default App;
