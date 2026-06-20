import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <h3>Kishore D</h3>

      <p>Aspiring Full Stack Developer</p>

      <div className="footer-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

      <p className="copyright">
        © 2026 Kishore D. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;