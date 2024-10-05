import '../index.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Projects = () => {
  const projects = [
    { 
      id: 1, 
      title: 'Task Master', 
      img: 'https://fliplet.com/wp-content/uploads/2024/02/fliplet_task_management_image.webp', 
      description: 'A task management platform for leaders and their teams. Streamline collaboration, and achieve your goals together.', 
      tech:'TECH: MERN Stack',
      goto: 'https://github.com/Pranav-P-K/Task-Manager',
    },
    { 
      id: 2, 
      title: 'Monster Chase', 
      img: 'https://awesometuts.com/wp-content/uploads/2021/09/Monster-Chase-Thumbnail-Blog.jpg', 
      description: 'Run and jump to evade the monsters charging from either side of the field in this exciting 2D chase game!', 
      tech:'TECH: Unity, C#',
      goto: 'https://github.com/Pranav-P-K/Monster-Chase',
    },
    { 
      id: 3, 
      title: 'Hangman', 
      img: 'https://46play.com/images/326.jpg', 
      description: 'Face the grim reaper of words. Every wrong guess brings you closer to eternal darkness in this hangman game.', 
      tech:'TECH: Flutter, Dart',
      goto: 'https://github.com/Pranav-P-K/Hangman-App',
    },
    { id: 4, 
      title: 'Memory Game', 
      img:'https://i.etsystatic.com/27759810/r/il/f178f4/3661501502/il_fullxfull.3661501502_3dzo.jpg', 
      description: "A card game designed to practice and enhance your brain's cognitive skills through interactive challenges.", 
      tech:'TECH: ReactJS,CSS3', 
      goto: 'https://github.com/Pranav-P-K/Memory-Game',
    },
    { 
      id: 5, 
      title: 'Expense Tracker', 
      img: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/b2a8ac65608331.5afa862ca7e21.png', 
      description: 'Users can create an account, manage expenses and income, view charts, and update or remove financial details.', 
      tech:'TECH: Flutter, Dart',
      goto: 'https://github.com/Pranav-P-K',
    },
    { id: 6, 
      title: 'Scientific Calculator', 
      img:'https://copyassignment.com/wp-content/uploads/2022/11/calc_res.jpg', 
      description: 'This is a basic scientific calculator created in Java and Java Swing for making Graphical User Interface (GUI).', 
      tech:'TECH: JAVA',
      goto: 'https://github.com/Pranav-P-K/Scientific-Calculator',
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
