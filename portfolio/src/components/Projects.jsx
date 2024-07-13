import '../styles/Projects.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Projects = () => {
  const projects = [
    { id: 1, title: 'Project 1', description: 'Description 1' },
    { id: 2, title: 'Project 2', description: 'Description 2' },
    { id: 3, title: 'Project 3', description: 'Description 3' },
    { id: 4, title: 'Project 4', description: 'Description 4' },
    { id: 5, title: 'Project 5', description: 'Description 5' },
    { id: 6, title: 'Project 6', description: 'Description 6' },
    { id: 7, title: 'Project 7', description: 'Description 7' },
    // Add more projects as needed
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
            <p>{project.description}</p>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Projects;
