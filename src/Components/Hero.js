
import React from 'react';
import './../styles/Hero.css';

function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <img src="/assets/images/profile.jpg" alt="Your Name" className="profile-image" />
        <h1>Hi, I'm [Your Name]</h1>
        <p className="tagline">[Your Professional Tagline, e.g., "A Full-Stack Developer passionate about creating intuitive and robust web applications."]</p>
        <div className="social-links">
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">GitHub</a>
          {/* Add more social links as needed */}
        </div>
        <a href="#contact" className="btn primary-btn">Get In Touch</a>
      </div>
    </section>
  );
}

export default Hero;
