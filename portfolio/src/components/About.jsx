import '../index.css';
import myImg from '../assets/dp-img.jpg';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
      <div className="about-image">
          <img src={myImg} alt="About" />
        </div>
        <div className="about-text">
          <h2>About Me</h2>
          <p>🎓 I am a motivated B.Tech. student in Electronics and Computer Engineering
             at VIT Chennai, with a solid foundation in both hardware and software.<br/>
             🛠️ Proficient in Python, Java, and experienced in frontend and backend technologies, 
             I have worked on various projects, including MERN stack web applications, enhancing my 
             full-stack development skills. I am currently exploring DevOps with enthusiasm.<br/>
             ⚡ I am eager to start my career, apply my skills to real-world challenges, 
             and continually learn and develop professionally. Connect with me if you share 
             similar interests or have opportunities where I can contribute.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
