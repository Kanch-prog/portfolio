import React, {useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNodeJs, faPython, faPhp, faJs } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faFlask } from '@fortawesome/free-solid-svg-icons';
import SkillsData from './SkillsData';

function About() {

  const icons = {
    "MERN stack": faNodeJs,
    "Django full stack": faPython,
    "React Native": faReact,
    "LAMP stack": faPhp,
    "Selenium": faFlask,
    "Python for data analysis": faPython,
    "MySQL/SQL": faDatabase,
    "Machine Learning": faJs,
    "Plotly and DJ3": faPython,
    "Web crawling": faPython,
  };

  const skillsPerRow = 4;

  const chunkArray = (arr, size) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (_, index) =>
      arr.slice(index * size, index * size + size)
    );
  };

  const skillChunks = chunkArray(SkillsData, skillsPerRow);

  useEffect(() => {
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('fade-in');
      }, index * 500); 
    });
  }, []);

  return (
    <div>
      <div className="about-section-box fade-in" >
        <div className="about-me">
          <h2><b>Hello there! 👋</b></h2>
          <p>I'm a passionate aspiring full-stack developer ready to embark on an exciting journey in the world of web development.</p>
          <p>Currently a dedicated math teacher with a passion for numbers and problem-solving. Over the past few years, I've been fostering a love for mathematics in my students, helping them develop critical thinking skills and a deep understanding of mathematical concepts.</p>
          <p>While teaching has been incredibly rewarding, I'm excited to transition into the IT industry, where I can apply my analytical skills in new and impactful ways.</p>
          <p><b>Education: </b>Bachelor's Degree in Science and Reading for Master in Information Technology</p>
        </div>

        <div className="about-picture">
          <div className="image-container">
            <img src="images/me.png" alt="Kanchana" />
          </div>
        </div>
      </div>  

      <div className="skills-section fade-in">
        <h3>Skills Currently Exploring</h3>
        {skillChunks.map((chunk, index) => (
          <div key={index} className="skills-list">
            {chunk.map((skill, idx) => (
              <div key={idx} className={`skill-item active`}>
                <div className='skill-text'>
                  <FontAwesomeIcon icon={icons[skill.name]} size="2x" />
                  <h3>{skill.name}</h3>
                  <p>{skill.description}</p>
                </div>                
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;