import React from 'react';
import Typewriter from "typewriter-effect";

function MainContent() {
  return (
    <div className="main-content">
      <div className="left-align">
        <h1 className="ibm-plex-mono-regular fade-in">Hello World, my name is</h1>
        <h2 className="fade-in">Kanchana Karunarathna.</h2>
        <Typewriter
          className="cutive-regular fade-in"
          onInit={(typewriter) => {
            typewriter
              .typeString("Full Stack Developer")
              .pauseFor(1000)
              .deleteAll()
              .typeString("Python Enthusiastic")
              .start();
          }}
        />
        <p className="fade-in left-align">Passionate math teacher moving into full-stack development. Skilled in MERN and Django stacks, looking for opportunities to use strong analytical skills in web development</p>
        
        <button className="fade-in button button2 left-align">
          <a 
            href="./files/Kanchana_Resume.pdf" 
            download="Kanchana_Resume.pdf"
            className="download-link"
          >
            Download my latest CV
          </a>
        </button>
      </div>
    </div>
  );
}

export default MainContent;
