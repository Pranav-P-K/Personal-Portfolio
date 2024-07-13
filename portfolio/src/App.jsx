import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';
import videoBG from './assets/bg-video.mp4';

function App() {
  return (
    <div className="App">
      <video src={videoBG} autoPlay loop muted></video>
      <Navbar />
      <main>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
