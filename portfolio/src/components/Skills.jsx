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
          <img src="https://img.icons8.com/color/500/dart.png" alt="dart" />
        </div>
        <div className={`skills-content ${active === 'frontend' ? 'active' : ''}`}>
          <img src="https://img.icons8.com/color/500/html-5--v1.png" alt="html5" />
          <img src="https://img.icons8.com/color/500/css3.png" alt="css3" />
          <img src="https://img.icons8.com/color/500/javascript--v1.png" alt="javascript" />
          <img src="https://img.icons8.com/color/500/typescript.png" alt="typescript" />
          <img src="https://img.icons8.com/office/500/react.png" alt="react-js"/>
          <img src="https://img.icons8.com/color/500/nextjs.png" alt="next-js"/>
          <img src="https://img.icons8.com/color/500/redux.png" alt="redux"/>
          <img src="https://img.icons8.com/fluency/500/tailwind_css.png" alt="tailwind-css"/>
          <img src="https://img.icons8.com/color/500/bootstrap--v2.png" alt="bootstrap"/>
          <img src="https://img.icons8.com/color/500/sass.png" alt="SASS"/>

        </div>
        <div className={`skills-content ${active === 'backend' ? 'active' : ''}`}>
          <img src="https://img.icons8.com/fluency/500/node-js.png" alt="node-js" />
          <img src="https://img.icons8.com/fluency/500/express-js.png" alt="express-js" />
          <img src="https://img.icons8.com/color/500/mongodb.png" alt="mongodb" />
          <img src="https://img.icons8.com/color/500/mysql-logo.png" alt="mysql" />
          <img src="https://img.icons8.com/color/500/google-firebase-console.png" alt="firebase"/>
        </div>
    </section>
  );
};

export default Skills;
