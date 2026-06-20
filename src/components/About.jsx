import "../styles/About.css";
import { motion } from "framer-motion";

function About() {
  return (
    <section className="about" id="about">
      <motion.div
        className="about-container"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2>About Me</h2>

        <p>
          I am Kishore  D, a B.Sc Computer Science student and an
          aspiring Full Stack Developer. I am passionate about building
          modern web applications and continuously learning new
          technologies.
        </p>

        <p>
          My goal is to become a skilled Software Developer and create
          innovative digital solutions that solve real-world problems.
        </p>

        <div className="about-cards">
          <div className="card">
            <h3>Education</h3>
            <p>B.Sc Computer Science</p>
          </div>

          <div className="card">
            <h3>Experience</h3>
            <p>Fresher</p>
          </div>

          <div className="card">
            <h3>Goal</h3>
            <p>Full Stack Developer</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;