import '../index.css';
import myImg from '../assets/dp-img.jpg';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <motion.div 
          className="about-image"
          drag
          dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ cursor: 'grabbing' }}
          style={{ cursor: 'grab' }}
        >
          <img src={myImg} alt="About" />
          <p style={{ textAlign: 'center', marginTop: '0.5rem', fontWeight: 'bold' }}>
            Drag Me
          </p>
        </motion.div>

        <div className="about-text">
          <h2>About Me</h2>
          <p>
            🎓 Hi, I am a B.Tech. student in Electronics and Computer Engineering 
            at VIT Chennai, with a strong interest in full-stack development, 
            AI, and blockchain technologies.<br/>
            🛠️ I have built and contributed to projects ranging from real-time chat apps 
            to decentralized freelancing platforms, and I have experience with technologies 
            like React, Next.js, Node.js, Firebase, and smart contracts. I have also 
            explored cloud platforms, backend integrations, and Python-based workflows.<br/>
            🚀 I am currently expanding my skills in Docker, FastAPI, and Flutter, and 
            I am always eager to solve real-world problems and build impactful digital 
            solutions.<br/>
            ⚡ Let us connect if you are working on exciting tech or have opportunities 
            where I can learn and contribute!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
