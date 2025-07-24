import React from 'react';
import './../styles/About.css';

function About() {
  const skills = [
    { category: 'Frontend', items: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Redux', 'Vue.js', 'Sass', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Node.js', 'Express.js', 'Python', 'Django', 'Flask', 'REST APIs', 'GraphQL'] },
    { category: 'Databases', items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase'] },
    { category: 'Tools & Devops', items: ['Git', 'GitHub', 'Docker', 'AWS', 'Netlify', 'Vercel', 'Webpack', 'Babel'] },
    // Add more categories and skills
  ];

  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>
      <p className="bio-text">
        [Hello there! I'm Bereket, a Strongly Passionate AI and Full-Stack Developer with skills in Python for back-end development and React with Tailwind CSS for front-end. Built real-world web and AI projects and hold a basic foundation in machine learning. Driven to deliver user-friendly, AI- powered solutions and real-world projects that solve real problems. And I'm always thankful for my God and Fans."
      </p>

      <a href="/assets/documents/your-resume.pdf" download="Bereket Gezhagne .pdf" className="btn secondary-btn">
        Download Resume
      </a>

      <div className="skills-section">
        <h3>My Skillset</h3>
        {skills.map((skillCategory, index) => (
          <div className="skill-category" key={index}>
            <h4>{skillCategory.category}</h4>
            <ul className="skill-list">
              {skillCategory.items.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;

