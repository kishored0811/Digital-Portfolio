import "../styles/Skills.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiMongodb,
  SiMysql,
  SiExpress,
} from "react-icons/si";

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <h2>My Skills</h2>

        <div className="skills-grid">

          <div className="skill-card">
            <h3>Frontend Development</h3>

            <ul>
              <li><FaHtml5 /> HTML5</li>
              <li><FaCss3Alt /> CSS3</li>
              <li><FaJs /> JavaScript</li>
              <li><FaReact /> React.js</li>
            </ul>
          </div>

          <div className="skill-card">
            <h3>Backend Development</h3>

            <ul>
              <li><FaNodeJs /> Node.js</li>
              <li><SiExpress /> Express.js</li>
            </ul>
          </div>

          <div className="skill-card">
            <h3>Database</h3>

            <ul>
              <li><SiMongodb /> MongoDB</li>
              <li><SiMysql /> MySQL</li>
            </ul>
          </div>

          <div className="skill-card">
            <h3>Tools</h3>

            <ul>
              <li><FaGitAlt /> Git</li>
              <li><FaGithub /> GitHub</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Skills;