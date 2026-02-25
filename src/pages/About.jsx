import { FaBullseye, FaEye, FaHeart } from "react-icons/fa";
import "./About.css";

const coreValues = ["Commitment", "Unity", "Integrity", "Service", "Leadership"];

function About() {
  return (
    <div className="about">
      <section className="page-header">
        <h1>About Us</h1>
        <p>Learn about our mission, vision, and the values that drive us.</p>
      </section>

      <section className="section">
        <div className="container about-grid">
          <div className="about-card">
            <FaBullseye className="about-card-icon" />
            <h3>Our Mission</h3>
            <p>
              To mentor, guide, and empower students to make informed decisions
              and become responsible leaders in society.
            </p>
          </div>
          <div className="about-card">
            <FaEye className="about-card-icon" />
            <h3>Our Vision</h3>
            <p>
              To build a generation of disciplined, academically strong, and
              socially responsible young people.
            </p>
          </div>
        </div>
      </section>

      <section className="section values-section">
        <div className="container">
          <h2 className="section-title">
            <FaHeart style={{ marginRight: "0.5rem", color: "#e8760a" }} />
            Core Values
          </h2>
          <div className="values-grid">
            {coreValues.map((value) => (
              <div key={value} className="value-badge">
                {value}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
