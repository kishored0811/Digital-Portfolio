import "../styles/Contact.css";
import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.section
      className="contact"
      id="contact"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="contact-container">
        <h2>Contact Me</h2>

        <p className="contact-text">
          Have a project or opportunity? Feel free to contact me.
        </p>

        <div className="contact-info">
          <p>📧 yourmail@gmail.com</p>
          <p>📍 Chennai, Tamil Nadu, India</p>
          <p>📱 +91 XXXXX XXXXX</p>
        </div>

        <form className="contact-form">
          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <textarea
            rows="6"
            placeholder="Your Message"
          ></textarea>

          <button type="submit">
            Send Message
          </button>
        </form>
      </div>
    </motion.section>
  );
}

export default Contact;