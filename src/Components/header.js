
import React from 'react';
import './../styles/Header.css'; // Link to your CSS file for this component

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <a href="/" className="logo"> BG </a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
          {/* Optional: <li><a href="#blog">Blog</a></li> */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
