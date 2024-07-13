import '../styles/About.css';
import myImg from '../assets/dp-img.jpg';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <div className="about-text">
          <h2>About Me</h2>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="about-image">
          <img src={myImg} alt="About" />
        </div>
      </div>
    </section>
  );
};

export default About;
