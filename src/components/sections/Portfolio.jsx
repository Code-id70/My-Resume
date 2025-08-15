import React, { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import "./Portfolio.css";

// Temporary mock data
const portfolioProjects = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    category: "Web Development",
    image: "/assets/portfolio.png.png",
    description: "Developed a modern, fully responsive personal portfolio website to showcase projects, skills, and professional background. The site features clean design, optimized performance, and cross-device compatibility.",
    technologies: ["React.js", "CSS", "JavaScript"],
    link: "https://www.linkedin.com/in/wanga-thagwana/",
    github: "https://github.com/Code-id70"
  },
  {
    id: 2,
    title: "Rock-Paper-Scissor Game",
    category: "Web Development",
    image: "/assets/rock-paper-scissor.png",
    description: "Created an interactive Rock-Paper-Scissors game with dynamic score tracking and instant result feedback. Designed for an engaging user experience with responsive layout and smooth gameplay.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    link: "https://code-id70.github.io/Rock-Paper-Scissor/",
    github: "https://github.com/Code-id70"
  },
  {
    id: 3,
    title: "Doctor Appointment Booking System",
    category: "Mobile Development",
    image: "/assets/doctor .png",
    description: "Developed a desktop-based doctor appointment booking application with a user-friendly interface using Java Swing components. Features include patient registration, appointment scheduling, and real-time status updates to streamline clinic operations.",
    technologies: ["Java", "Swing", "JDBS", "AWT"],
    link: "https://github.com/Code-id70",
    github: "https://github.com/Code-id70"
  },
  {
    id: 4,
    title: "To-Do List Application",
    category: "Web Development",
    image: "/assets/todo-list.png",
    description: "A clean and responsive task management application designed to help users create, organize, and track their daily activities. Features include adding, editing, deleting, and marking tasks as completed for improved productivity.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    link: "https://code-id70.github.io/To-do-List-Application/",
    github: "https://github.com/Code-id70"
  },
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ["All", "Web Development", "Mobile Development"];

  const filteredProjects =
    selectedCategory === "All"
      ? portfolioProjects
      : portfolioProjects.filter((project) => project.category === selectedCategory);

  const openProjectModal = (project) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="portfolio-section">
      <div className="portfolio-content">
        <h1 className="section-title">PORTFOLIO</h1>
        <div className="title-underline"></div>

        {/* Category Filter */}
        <div className="category-filter">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${selectedCategory === category ? "active" : ""}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="project-card hover-lift transition-all"
              onClick={() => openProjectModal(project)}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-actions">
                    <ExternalLink size={20} />
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="project-modal" onClick={closeProjectModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeProjectModal}>
              ×
            </button>
            <div className="modal-body">
              <div className="modal-image">
                <img src={selectedProject.image} alt={selectedProject.title} />
              </div>
              <div className="modal-info">
                <h2>{selectedProject.title}</h2>
                <p className="project-category">{selectedProject.category}</p>
                <p className="project-description">{selectedProject.description}</p>

                <div className="technologies">
                  <h4>Technologies Used:</h4>
                  <div className="tech-tags">
                    {selectedProject.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="project-links">
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <ExternalLink size={16} />
                    View Project
                  </a>
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <Github size={16} />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
