import "../styles/Achievements.css";

function Achievements() {
  return (
    <section className="achievements" id="achievements">
      <div className="achievements-container">
        <h2>Achievements</h2>

        <div className="achievements-grid">
          <div className="achievement-card">
            <h3>5+</h3>
            <p>Certificates Earned</p>
          </div>

          <div className="achievement-card">
            <h3>3+</h3>
            <p>Projects Completed</p>
          </div>

          <div className="achievement-card">
            <h3>10+</h3>
            <p>Technologies Learned</p>
          </div>

          <div className="achievement-card">
            <h3>2027</h3>
            <p>Graduation Year</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Achievements;