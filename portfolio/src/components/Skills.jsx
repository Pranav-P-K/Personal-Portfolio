import { useState } from 'react';
import '../styles/Skills.css';

const Skills = () => {
  const [active, setActive] = useState('languages');

  return (
    <section id="skills" className="skills-section">
      <div className="skills-tabs">
        <button onClick={() => setActive('languages')}>Languages</button>
        <button onClick={() => setActive('frontend')}>Frontend</button>
        <button onClick={() => setActive('backend')}>Backend</button>
      </div>
      <div className={`skills-content ${active === 'languages' ? 'active' : ''}`}>
        {/* Content for Languages */}
      </div>
      <div className={`skills-content ${active === 'frontend' ? 'active' : ''}`}>
        {/* Content for Frontend */}
      </div>
      <div className={`skills-content ${active === 'backend' ? 'active' : ''}`}>
        {/* Content for Backend */}
      </div>
    </section>
  );
};

export default Skills;
