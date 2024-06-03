import React from 'react';
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import MainContent from "./MainContent";
import About from "./About";
import Portfolio from "./Portfolio";
import './App.css';

function App() {
  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  const mainContentRef = React.useRef(null);
  const aboutRef = React.useRef(null);
  const projectsRef = React.useRef(null);

  return (
    <div className="app">
      {/* Navbar */}
      <Navbar
        scrollToMain={() => scrollToRef(mainContentRef)}
        scrollToAbout={() => scrollToRef(aboutRef)}
        scrollToProjects={() => scrollToRef(projectsRef)}
      />

      {/* Sidebar */}
      <div className="sidebar">
        <Sidebar />
      </div>

      {/* Main content */}
      <div className="main-section" ref={mainContentRef}>
        <MainContent />
      </div>

      {/* About section */}
      <div className="about-section" ref={aboutRef}>
        <About />
      </div>

      {/* Portfolio */}
      <div className="portfolio-section" ref={projectsRef}>
        <Portfolio />
      </div>

    </div>
  );
}

export default App;
