import "../styles/Resume.css";

function Resume() {
  return (
    <section className="resume" id="resume">
      <div className="resume-container">
        <h2>Resume</h2>

        <p>
          Download my resume to know more about my skills,
          education, certifications and projects.
        </p>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-btn"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}

export default Resume;