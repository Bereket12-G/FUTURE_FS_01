import React from 'react';
import './../styles/ProjectCard.css';

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <img src={project.image} alt={Tic Toe Game} className="project-image" />
      <div className="project-info">
        <h3>{project.title}</h3>
        <p className="Built an AI-powered study assistant that generates notes, quizzes, and flashcards from user-uploaded materials to help students learn smarter and faster. Integrated modern UI with React and Tailwind CSS and used Python for backend logic and data handling. I also used a Groq API for the AI.">{project.description}</p>
        <div className="project-tech">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
        <div className="project-links">
          {project.liveLink && (
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link live">Live Demo</a>
          )}
          {project.githubLink && (
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link github">GitHub Repo</a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;

