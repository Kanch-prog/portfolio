import React, { useState } from 'react';

function Navbar({ 
  scrollToMain,
  scrollToAbout,
  scrollToProjects
}) {
  // State to track active section
  const [activeSection, setActiveSection] = useState('home');

  // Function to handle click and update active section
  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  return (
    <nav className="navbar">
        <div className="nav-links">
          <a 
            onClick={() => {
              scrollToMain();
              handleNavClick('home');
            }} 
            className={activeSection === 'home' ? 'active' : ''} 
            href="#home"
          >
            Home
          </a>
          <a 
            onClick={() => {
              scrollToAbout();
              handleNavClick('about');
            }} 
            className={activeSection === 'about' ? 'active' : ''} 
            href="#about"
          >
            About
          </a>
          <a 
            onClick={() => {
              scrollToProjects();
              handleNavClick('projects');
            }} 
            className={activeSection === 'projects' ? 'active' : ''} 
            href="#projects"
          >
            Projects
          </a>
        </div>
        <a href="mailto:kanchana.karunarathna15@gmail.com" className="button button1 fade-in download-link">
          Hire Me
        </a>
      </nav>
  );
}

export default Navbar;
