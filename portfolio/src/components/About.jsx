import '../styles/About.css';
import myImg from '../assets/dp-img.jpg';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <div className="about-text">
          <h2>About Me</h2>
          <p>🎓 I am a motivated and passionate B.Tech. student specializing in 
            Electronics and Computer Engineering at Vellore Institute of Technology, Chennai. 
            My education has equipped me with a strong foundation in both hardware and software, 
            allowing me to develop a comprehensive skill set.<br/> 🛠️ I am proficient in several 
            programming languages including Python, Java and have hands-on experience in 
            frontend and backend technologies. Throughout my academic journey, I have worked 
            on various projects, notably web applications utilizing the MERN stack, which have 
            honed my skills in full-stack development. Also, I am currently exploring the 
            DevOps world and am excited to work further on it.<br/> ⚡ I am enthusiastic about starting 
            my career and applying my knowledge and skills to real-world challenges. I am eager 
            to contribute and continuously learn and develop my professional expertise. Feel free 
            to connect with me if you share similar interests or have opportunities where my skills 
            could be of value.</p>
        </div>
        <div className="about-image">
          <img src={myImg} alt="About" />
        </div>
      </div>
    </section>
  );
};

export default About;
