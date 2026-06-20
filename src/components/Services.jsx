import "../styles/Services.css";

function Services() {
  return (
    <section className="services" id="services">
      <div className="services-container">
        <h2>My Services</h2>

        <div className="services-grid">

          <div className="service-card">
            <h3>Frontend Development</h3>
            <p>
              Modern and responsive websites using HTML, CSS,
              JavaScript and React.js.
            </p>
          </div>

          <div className="service-card">
            <h3>Web Design</h3>
            <p>
              Clean, modern and user-friendly website designs
              for all devices.
            </p>
          </div>

          <div className="service-card">
            <h3>Full Stack Development</h3>
            <p>
              Building complete web applications using React,
              Node.js, Express and MongoDB.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Services;