import { useState } from 'react';
import '../index.css';

const Skills = () => {
  const [active, setActive] = useState('languages');

  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <div className="skills-tabs">
        <button onClick={() => setActive('languages')}>LANGUAGES</button>
        <button onClick={() => setActive('frontend')}>FRONTEND</button>
        <button onClick={() => setActive('backend')}>BACKEND</button>
      </div>
        <div className={`skills-content ${active === 'languages' ? 'active' : ''}`}>
          <img src="https://img.icons8.com/color/500/python--v1.png" alt="python" />
          <img src="https://img.icons8.com/color/500/java-coffee-cup-logo--v1.png" alt="java" />
          <img src="https://img.icons8.com/color/500/c-programming.png" alt="c" />
          <img src="https://img.icons8.com/color/500/c-plus-plus-logo.png" alt="c++" />
        </div>
        <div className={`skills-content ${active === 'frontend' ? 'active' : ''}`}>
          <img src="https://img.icons8.com/color/500/html-5--v1.png" alt="html5" />
          <img src="https://img.icons8.com/color/500/css3.png" alt="css3" />
          <img src="https://img.icons8.com/color/500/javascript--v1.png" alt="javascript" />
          <img src="https://img.icons8.com/bubbles/50/react.png" alt="react-js" />
        </div>
        <div className={`skills-content ${active === 'backend' ? 'active' : ''}`}>
          <img src="https://img.icons8.com/fluency/500/node-js.png" alt="node-js" />
          <img src="https://img.icons8.com/fluency/500/express-js.png" alt="express-js" />
          <img src="https://img.icons8.com/color/500/mongodb.png" alt="mongodb" />
          <img src="https://img.icons8.com/color/500/mysql-logo.png" alt="mysql" />
        </div>
    </section>
  );
};

export default Skills;
