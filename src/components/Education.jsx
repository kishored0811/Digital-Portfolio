import "../styles/Education.css";
import { motion } from "framer-motion";

function Education() {
  return (
    <motion.section
      className="education"
      id="education"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="education-container">
        <h2>Education</h2>

        <motion.div
          className="education-card"
          whileHover={{ scale: 1.03 }}
        >
          <h3>B.Sc Computer Science</h3>

          <h4>Veltech Ranga Sanku Arts College</h4>

          <p className="year">
            2024 - 2027
          </p>

          <p className="description">
            Currently pursuing Bachelor of Science in Computer Science
            with a strong interest in Full Stack Development,
            Web Development and Software Engineering.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Education;