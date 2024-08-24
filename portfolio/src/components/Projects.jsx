import '../index.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Projects = () => {
  const projects = [
    { 
      id: 1, 
      title: 'Expense Tracker', 
      img: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/b2a8ac65608331.5afa862ca7e21.png', 
      description: 'Users can create an account, manage expenses and income, view charts, and update or remove financial details.', 
      tech:'TECH: MERN Stack',
      goto: 'https://github.com/Pranav-P-K/Expense-Tracker',
    },
    { 
      id: 2, 
      title: 'Login Page', 
      img: 'https://cdn.dribbble.com/userupload/4609730/file/original-184f61e918c09816744483b9b4703a68.png?resize=400x0', 
      description: 'Responsive Login & Registration Form Using HTML CSS & JavaScript with animations when changing forms.', 
      tech:'TECH: HTML,CSS,JS',
      goto: 'https://github.com/Pranav-P-K/Login-Page',
    },
    { id: 3, 
      title: 'Scientific Calculator', 
      img:'https://copyassignment.com/wp-content/uploads/2022/11/calc_res.jpg', 
      description: 'This is a basic scientific calculator created in Java and Java Swing for making Graphical User Interface (GUI).', 
      tech:'TECH: JAVA',
      goto: 'https://github.com/Pranav-P-K/Scientific-Calculator',
    },
    { id: 4, 
      title: 'Memory Game', 
      img:'https://i.etsystatic.com/27759810/r/il/f178f4/3661501502/il_fullxfull.3661501502_3dzo.jpg', 
      description: "A card game designed to practice and enhance your brain's cognitive skills through interactive challenges.", 
      tech:'TECH: ReactJS,CSS3', 
      goto: 'https://github.com/Pranav-P-K/Memory-Game',
    },
  ];

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 3 },
    desktop: { breakpoint: { max: 1024, min: 768 }, items: 2 },
    tablet: { breakpoint: { max: 768, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
  };

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <Carousel responsive={responsive}>
        {projects.map(project => (
          <div key={project.id} className="project-item">
            <h3>{project.title}</h3>
            <img src={project.img}/>
            <p>{project.description}</p>
            <div className='project-footer'>
              <p>{project.tech}</p>
              <a href={project.goto}>Code</a>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Projects;
