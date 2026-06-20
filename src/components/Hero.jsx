import "../styles/Hero.css";
import { motion } from "framer-motion";
import profileImg from "../assets/images/profile.jpg";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={profileImg} alt="Kishore" />
        </motion.div>

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h3>Hello, I'm</h3>

          <h1>Kishore D</h1>

          <h2>Aspiring Full Stack Developer</h2>

          <p>
            Passionate about Web Development and creating modern,
            responsive, and user-friendly applications using
            React.js, JavaScript, Node.js and MongoDB.
          </p>

          <div className="hero-buttons">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Download Resume
            </a>

            <a
              href="#contact"
              className="btn-secondary"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;