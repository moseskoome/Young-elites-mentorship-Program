import { Link } from "react-router-dom";
import { FaQuoteLeft } from "react-icons/fa";
import testimonialsData from "../data/testimonialsData";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            Shaping Minds. Building Character.{" "}
            <span>Securing the Future.</span>
          </h1>
          <p>
            Young Elites Mentorship is committed to empowering JSS and secondary
            school students through guidance in academics, character development,
            and drug &amp; substance abuse awareness.
          </p>
          <Link to="/focus-areas" className="btn btn-primary">
            Explore Our Programs
          </Link>
        </div>
      </section>

      {/* Short Intro */}
      <section className="section intro-section">
        <div className="container">
          <h2 className="section-title">Who We Are</h2>
          <p className="intro-text">
            We are a youth-focused mentorship program dedicated to building
            confident, disciplined, and purpose-driven students through
            interactive sessions and community engagement.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section testimonials-section">
        <div className="container">
          <h2 className="section-title">What People Say</h2>
          <div className="testimonials-grid">
            {testimonialsData.map((t) => (
              <div key={t.id} className="testimonial-card">
                <FaQuoteLeft className="testimonial-icon" />
                <p className="testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
                <span className="testimonial-author">&mdash; {t.author}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
