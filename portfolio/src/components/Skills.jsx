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
        <button onClick={() => setActive('tools')}>TOOLS</button>
      </div>
      <div className={`skills-content ${active === 'languages' ? 'active' : ''}`}>
        <div className="skill-item">
          <img src="https://img.icons8.com/color/500/python--v1.png" alt="python" />
          <p>Python</p>
        </div>
        <div className="skill-item">
          <img src="https://img.icons8.com/color/500/java-coffee-cup-logo--v1.png" alt="java" />
          <p>Java</p>
        </div>
        <div className="skill-item">
          <img src="https://img.icons8.com/color/500/c-programming.png" alt="c" />
          <p>C</p>
        </div>
        <div className="skill-item">
          <img src="https://img.icons8.com/color/500/c-plus-plus-logo.png" alt="c++" />
          <p>C++</p>
        </div>
        <div className="skill-item">
          <img src="https://img.icons8.com/color/500/dart.png" alt="dart" />
          <p>Dart</p>
        </div>
        <div className="skill-item">
          <img src="https://img.icons8.com/color/500/c-sharp-logo.png" alt="c-sharp" />
          <p>C#</p>
        </div>
      </div>
      <div className={`skills-content ${active === 'frontend' ? 'active' : ''}`}>
        <div className="skill-item">
          <img src="https://img.icons8.com/color/500/html-5--v1.png" alt="html5" />
          <p>HTML5</p>
        </div>
        <div className="skill-item">
          <img src="https://img.icons8.com/color/500/css3.png" alt="css3" />
          <p>CSS3</p>
        </div>
        <div className="skill-item">
          <img src="https://img.icons8.com/color/500/javascript--v1.png" alt="javascript" />
          <p>JavaScript</p>
        </div>
        <div className="skill-item">
          <img src="https://img.icons8.com/color/500/typescript.png" alt="typescript" />
          <p>TypeScript</p>
        </div>
        <div className="skill-item">
          <img src="https://img.icons8.com/office/500/react.png" alt="react-js"/>
          <p>ReactJS</p>
        </div>
        <div className="skill-item">
          <img src="https://img.icons8.com/nolan/500/react-native.png" alt="react-native"/>
          <p>React Native</p>
        </div>
        <div className="skill-item">
          <img src="https://img.icons8.com/color/500/nextjs.png" alt="next-js"/>
          <p>NextJS</p>
        </div>
        <div className="skill-item">
          <img src="https://img.icons8.com/fluency/500/tailwind_css.png" alt="tailwind-css"/>
          <p>Tailwind CSS</p>
        </div>
        <div className="skill-item">
          <img src="https://canada1.discourse-cdn.com/flex035/uploads/threejs/optimized/2X/e/e4f86d2200d2d35c30f7b1494e96b9595ebc2751_2_744x750.png" alt="three-js"/>
          <p>ThreeJS</p>
        </div>
        <div className="skill-item">
          <img src="https://img.icons8.com/doodle/500/svetle.png" alt="svelte"/>
          <p>Svelte</p>
        </div>
        <div className="skill-item">
          <img src="https://img.icons8.com/color/500/redux.png" alt="redux"/>
          <p>Redux</p>
        </div>
        <div className="skill-item">
          <img src="https://img.icons8.com/color/500/bootstrap--v2.png" alt="bootstrap"/>
          <p>Bootstrap</p>
        </div>
        <div className="skill-item">
          <img src="https://img.icons8.com/color/500/sass.png" alt="SASS"/>
          <p>SASS</p>
        </div>
      </div>
      <div className={`skills-content ${active === 'backend' ? 'active' : ''}`}>
        <div className="skill-item">
          <img src="https://img.icons8.com/fluency/500/node-js.png" alt="node-js" />
          <p>NodeJS</p>
        </div>
        <div className="skill-item">
          <img src="https://img.icons8.com/fluency/500/express-js.png" alt="express-js" />
          <p>ExpressJS</p>
        </div>
        <div className="skill-item">
          <img src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/500/external-mongodb-a-cross-platform-document-oriented-database-program-logo-color-tal-revivo.png" alt="mongodb"/>
          <p>MongoDB</p>
        </div>
        <div className="skill-item">
          <img src="https://img.icons8.com/color/500/mysql-logo.png" alt="mysql" />
          <p>MySQL</p>
        </div>
        <div className="skill-item">
          <img src="https://img.icons8.com/color/500/postgreesql.png" alt="postgresql" />
          <p>PostgreSQL</p>
        </div>
        <div className="skill-item">
          <img src="https://img.icons8.com/color/500/firebase.png" alt="firebase"/>
          <p>Firebase</p>
        </div>
        <div className="skill-item">
          <img src="https://img.icons8.com/color/500/solidity.png" alt="solidity"/>
          <p>Solidity</p>
        </div>
      </div>
      <div className={`skills-content ${active === 'tools' ? 'active' : ''}`}>
        <div className="skill-item">
          <img src="https://img.icons8.com/color/500/visual-studio-code-2019.png" alt="vs-code"/>
          <p>VS Code</p>
        </div>
        <div className="skill-item">
          <img src="https://img.icons8.com/color/500/git.png" alt="git" />
          <p>Git</p>
        </div>
        <div className="skill-item">
          <img src="https://img.icons8.com/ios-filled/500/unity.png" alt="unity" />
          <p>Unity</p>
        </div>
        <div className="skill-item">
          <img width="24" height="24" src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/500/external-kaggle-an-online-community-of-data-scientists-and-machine-learners-owned-by-google-logo-shadow-tal-revivo.png" alt="kaggle"/>
          <p>Kaggle</p>
        </div>
        <div className="skill-item">
          <img src="https://img.icons8.com/color/500/flutter.png" alt="flutter" />
          <p>Flutter</p>
        </div>
        <div className="skill-item">
          <img src="https://img.icons8.com/fluency/500/docker.png" alt="docker" />
          <p>Docker</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;