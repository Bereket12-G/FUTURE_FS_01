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
        [Write a concise and compelling summary about yourself, your passion, and your professional goals. 
        Highlight what makes you unique and what kind of problems you enjoy solving.]
        <br/><br/>
        For example: "I am a passionate software engineer with 5+ years of experience in building scalable and performant web applications. 
        My expertise lies in crafting intuitive user interfaces and robust backend systems. I thrive in collaborative environments and am always eager to learn new technologies."
      </p>

      <a href="/assets/documents/your-resume.pdf" download="YourName_Resume.pdf" className="btn secondary-btn">
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

