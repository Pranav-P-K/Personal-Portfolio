import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import videoBG from './assets/bg-video.mp4';
import './App.css';

function App() {
  return (
    <div className="App">
      <video src={videoBG} autoPlay loop muted></video>
      <Navbar />
      <main>
        <h1 className='self'>PRANAV P K</h1>
        <h2 className='description'>STUDENT | LEARNER | DEVELOPER</h2>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;