import React from 'react';
import ProjectCard from './ProjectCard';
import projectsData from './../data/projectsData'; // Import your project data
import './../styles/Projects.css';

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>My Projectsbbbnnjnjj</h2>
      <div className="projects-grid">
        {projectsData.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;

