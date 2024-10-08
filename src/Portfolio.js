import React from 'react';

const Portfolio = () => {
  const projects = [
    /*{
      title: 'Travel-Landing-page',
      description: 'Developed a dynamic landing page for a tour and travel website, featuring an auto-playing background video slider.',
      link: 'https://github.com/Kanch-prog/payroll_system',
      imageUrl: 'https://kanch-prog.github.io/portfolio/images/pic_01.PNG'
    },*/
    /*{
      title: 'Laravel Payroll System',
      description: 'A simple solution designed to streamline employee management and payroll processing.',
      link: 'https://github.com/Kanch-prog/payroll_system/',
      imageUrl: 'https://kanch-prog.github.io/portfolio/images/pic_09.PNG'
    },*/
    {
      title: 'Classified-Ads',
      description: 'MERN-based classified ads platform.',
      link: 'https://github.com/Kanch-prog/classified-ads-frontend',
      imageUrl: 'https://kanch-prog.github.io/portfolio/images/pic_13.PNG'
    },
    {
      title: 'Library Interface',
      description: 'Java CRUD app for library management.',
      link: 'https://github.com/Kanch-prog/LibraryInterface',
      imageUrl: 'https://kanch-prog.github.io/portfolio/images/pic_14.PNG'
    },
    
    {
      title: 'Laravel Blog',
      description: 'Wandering Willow is a Laravel-based web application designed for sharing and managing blog posts',
      link: 'https://github.com/Kanch-prog/Laravel-blog',
      imageUrl: 'https://kanch-prog.github.io/portfolio/images/pic_10.PNG'
    },
    {
      title: 'Property Search',
      description: 'A web application to search for properties based on various criteria',
      link: 'https://github.com/Kanch-prog/Estate-Agent/',
      imageUrl: 'https://kanch-prog.github.io/portfolio/images/pic_02.PNG'
    },
    {
      title: 'Resume Builder',
      description: 'A web application that allows users to create and customize professional resumes online.',
      link: 'https://kanch-prog.github.io/resume/',
      imageUrl: 'https://kanch-prog.github.io/portfolio/images/pic_03.PNG'
    },
    {
      title: 'Data Analysis Project',
      description: 'A proposal to analyze transaction data to identify anomalies that may indicate potential money laundering',
      link: 'https://github.com/Kanch-prog/AML_transacation/',
      imageUrl: 'https://kanch-prog.github.io/portfolio/images/pic_04.PNG'
    },
    {
      title: 'Document Management System',
      description: 'A web application developed using Next.js, allowing users to efficiently manage their documents.',
      link: 'https://github.com/Kanch-prog/Doc_manager_NextJS',
      imageUrl: 'https://kanch-prog.github.io/portfolio/images/pic_05.PNG'
    },
    {
      title: 'Blogging Platform with RecSys',
      description: 'A dynamic platform developed using Django, with CRUD & Recommendation system included.',
      link: 'https://github.com/Kanch-prog/Blog-App-ML/',
      imageUrl: 'https://kanch-prog.github.io/portfolio/images/pic_06.PNG'
    },
    /*{
      title: 'Small Social Network',
      description: 'A platform developed using Django, allowing users to connect with each other.',
      link: 'https://github.com/Kanch-prog/Social-frontend',
      imageUrl: 'https://kanch-prog.github.io/portfolio/images/pic_07.PNG'
    },*/
    {
      title: 'Django Blogging Platform',
      description: 'A web application built using Django, to create, publish, and manage blog posts, with content management system.',
      link: 'https://github.com/Kanch-prog/Django-crud-app/',
      imageUrl: 'https://kanch-prog.github.io/portfolio/images/pic_08.PNG'
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
                  <p>GitHub Link: <a href={project.link} className="no-underline">{project.link}</a></p>
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
