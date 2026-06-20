import "../styles/Projects.css";
import { motion } from "framer-motion";

import portfolioImg from "../assets/images/portfolio.png";
import admissionImg from "../assets/images/admission-form.png";
import foodImg from "../assets/images/food-ordering.png";

function Projects() {
  const projects = [
    {
      title: "Digital Portfolio Website",
      image: portfolioImg,
      description:
        "Modern personal portfolio website built using React.js with responsive design and smooth animations.",
      tech: "React.js, CSS, Framer Motion",
      github: "https://github.com/yourusername/portfolio",
      demo: "https://yourportfolio.vercel.app",
    },

    {
      title: "Online Admission Form",
      image: admissionImg,
      description:
        "Student admission registration system with validation and user-friendly interface.",
      tech: "HTML, CSS, JavaScript",
      github: "https://github.com/yourusername/admission-form",
      demo: "https://admission-form.vercel.app",
    },

    {
      title: "Food Ordering Website",
      image: foodImg,
      description:
        "Responsive food ordering application with modern UI and seamless user experience.",
      tech: "React.js, Bootstrap",
      github: "https://github.com/yourusername/food-ordering",
      demo: "https://food-ordering.vercel.app",
    },
  ];

  return (
    <motion.section
      className="projects"
      id="projects"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="projects-container">
        <h2>My Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              className="project-card"
              key={index}
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />

              <div className="project-content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <span className="project-tech">
                  {project.tech}
                </span>

                <div className="project-buttons">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="demo-btn"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="github-btn"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Projects;