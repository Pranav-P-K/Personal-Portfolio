import '../index.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Projects = () => {
  const projects = [
    { 
      id: 1, 
      title: 'DeWorkHub', 
      img: 'https://framerusercontent.com/images/MOOseuOHCnNnEJi8SxOM9cNKM.png', 
      description: 'A decentralized platform enabling secure instant payments and fair governance for freelancers and startups.', 
      tech:'TECH: NextJS, MongoDB, Solidity',
      goto: 'https://github.com/Pranav-P-K/DeWorkHub',
    },
    { 
      id: 2, 
      title: 'TalkNest', 
      img: 'https://www.apptunix.com/blog/wp-content/uploads/sites/3/2020/11/app-like-chatango.jpg', 
      description: 'TalkNest is a real-time chat app with secure login, instant messaging, notifications, and chat history access.', 
      tech:'TECH: React Native, Firebase',
      goto: 'https://github.com/Pranav-P-K/TalkNest',
    },
    { id: 3, 
      title: 'AI Interviewer', 
      img:'https://www.ttnews.com/sites/default/files/2023-09/iTECH-Dysart-1200.jpg', 
      description: "An AI-powered interview simulator that analyzes responses and delivers real-time, personalized feedback for improvement.", 
      tech:'TECH: NextJS, PostgreSQL, Gemini AI', 
      goto: 'https://github.com/Pranav-P-K/AI-Interviewer',
    },
    { id: 4, 
      title: 'Ultimate TicTacToe', 
      img:'https://www.coolmathgames.com/sites/default/files/Super%20Tic%20Tac%20Toe%20OG%20Image.png', 
      description: "Ultimate TicTacToe is an advanced, strategic twist on classic TicTacToe with nested boards and gameplay.", 
      tech:'TECH: Flutter, Dart', 
      goto: 'https://github.com/Pranav-P-K/Ultimate-TicTacToe',
    },
    { 
      id: 5, 
      title: 'Monster Chase', 
      img: 'https://awesometuts.com/wp-content/uploads/2021/09/Monster-Chase-Thumbnail-Blog.jpg', 
      description: 'Run and jump to evade the monsters charging from either side of the field in this exciting 2D chase game!', 
      tech:'TECH: Unity, C#',
      goto: 'https://github.com/Pranav-P-K/Monster-Chase',
    },
    { id: 6, 
      title: 'Scientific Calculator', 
      img:'https://www.otofly.co/cdn/shop/articles/The_New_iOS_18_Calculator_App_-_OTOFLY_s_Guide.webp?v=1723626620&width=2048', 
      description: 'This is a scientific calculator created in Java and Java Swing for making Graphical User Interface (GUI).', 
      tech:'TECH: Java',
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
