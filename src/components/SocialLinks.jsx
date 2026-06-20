import "../styles/SocialLinks.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa";

function SocialLinks() {
  return (
    <section className="social-links" id="social">
      <div className="social-container">
        <h2>Connect With Me</h2>

        <p>
          Feel free to connect with me through social media platforms.
        </p>

        <div className="social-icons">
          <a
            href="https://github.com/kishored0811"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/kishore-d-in"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:kishore.d0811@gmail.com"
          >
            <FaEnvelope />
          </a>

          <a
            href="https://instagram.com/kishored0811"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </section>
  );
}

export default SocialLinks;