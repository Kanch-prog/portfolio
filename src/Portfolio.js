import React from 'react';

const Portfolio = () => {
  const baseUrl = process.env.NODE_ENV === 'production' ? '/' : '/';
  
  const projects = [
    {
      title: 'Travel-Landing-page',
      description: 'Developed a dynamic landing page for a tour and travel website, featuring an auto-playing background video slider.',
      link: 'https://kanch-prog.github.io/background-video/',
      imageUrl:`images/pic_01.PNG` 
    },
    {
      title: 'Property Search',
      description: 'A web application to search for properties based on various criteria',
      link: 'https://github.com/Kanch-prog/Estate-Agent/',
      imageUrl: `${baseUrl}images/pic_02.png`
    },
    {
      title: 'Resume Builder',
      description: 'A web application that allows users to create and customize professional resumes online.',
      link: 'https://kanch-prog.github.io/resume/',
      imageUrl: `${baseUrl}images/pic_03.png`
    },
    {
      title: 'Data Analysis Project',
      description: 'A proposal to analyze transaction data to identify anomalies that may indicate potential money laundering',
      link: 'https://github.com/Kanch-prog/AML_transacation/',
      imageUrl: `${baseUrl}images/pic_04.png`
    },
    {
      title: 'Document Management System',
      description: 'A a web application developed using Next.js, allowing users to efficiently manage their documents.',
      link: 'https://github.com/Kanch-prog/Doc_manager_NextJS',
      imageUrl: `${baseUrl}images/pic_05.png`
    },
    {
      title: 'Blogging Platform with RecSys',
      description: 'A dynamic platform developed using the Django,with CRUD & Recommendation system included.',
      link: 'https://github.com/Kanch-prog/Blog-App-ML/',
      imageUrl:`${baseUrl}images/pic_06.png`
    },
    {
      title: 'Small Social Network',
      description: 'A platform developed using Django,allowing users to connect with each other.',
      link: 'https://github.com/Kanch-prog/Social-frontend',
      imageUrl: `${baseUrl}images/pic_07.png`
    },
    {
      title: 'Django Blogging Platform',
      description: 'A web application built using Django, to create, publish, and manage blog posts, with content management system.',
      link: 'https://github.com/Kanch-prog/Django-crud-app/',
      imageUrl: `${baseUrl}images/pic_08.png`
    },
  ];

  return (
    <div>
      <div className="portfolio-section-box">
      <h2>My Projects</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-card-inner">
              <div className="project-card-front">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <div className="project-card-back">
                <img src={project.imageUrl} alt={project.title} />
                <p>GitHub Link: <a href="{project.link}" class="no-underline">{project.link}</a></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    </div>
    
  );
};

export default Portfolio;
