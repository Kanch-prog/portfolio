import React from 'react';

const Portfolio = () => {
  return (
    <div>
      <div className="portfolio-section-box">
        <h2>My Projects</h2>
        <div className="projects">
          <div className="project-card">
            <div className="project-card-inner">
              <div className="project-card-front">
                <h3>Sample Project</h3>
                <p>Sample Description</p>
              </div>
              <div className="project-card-back">
                <img src="https://kanch-prog.github.io/portfolio/images/pic_01.PNG" alt="Sample Project" />
                <p>GitHub Link: <a href="https://kanch-prog.github.io/background-video/" className="no-underline">https://kanch-prog.github.io/background-video/</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
