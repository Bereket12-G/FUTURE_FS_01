import React from 'react';
import './../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Bereket Gezhagne . All rights reserved.</p>
        <div className="footer-links">
          <a href=https://www.linkedin.com/in/bereket-gezhagne" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/Bereket12-G" target="_blank" rel="noopener noreferrer">GitHub</a>
          {/* Add more footer links if desired */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;

