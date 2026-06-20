import "../styles/Certificates.css";
import { motion } from "framer-motion";

function Certificates() {
  const certificates = [
    {
      title: "Oracle Cloud Infrastructure 2025 AI Foundations Associate",
      issuer: "Oracle",
    },
    {
      title: "HTML & CSS Certificate",
      issuer: "Online Certification",
    },
    {
      title: "Python Programming Certificate",
      issuer: "Online Certification",
    },
    {
      title: "Java Programming Certificate",
      issuer: "Online Certification",
    },
    {
      title: "Web Development Certificate",
      issuer: "Online Certification",
    },
  ];

  return (
    <motion.section
      className="certificates"
      id="certificates"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="certificates-container">
        <h2>Certifications</h2>

        <div className="certificates-grid">
          {certificates.map((certificate, index) => (
            <motion.div
              className="certificate-card"
              key={index}
              whileHover={{ scale: 1.03 }}
            >
              <h3>{certificate.title}</h3>

              <p>{certificate.issuer}</p>

              <button className="certificate-btn">
                View Certificate
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Certificates;