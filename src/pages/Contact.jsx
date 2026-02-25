import {
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <section className="page-header">
        <h1>Contact Us</h1>
        <p>We would love to hear from you. Reach out today!</p>
      </section>

      <section className="section">
        <div className="container contact-container">
          <div className="contact-info">
            <h2>Get In Touch</h2>
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <div>
                <h4>Phone</h4>
                <a href="tel:0701707328">0701707328</a>
              </div>
            </div>
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <div>
                <h4>Email</h4>
                <a href="mailto:moseskoomenkunja@gmail.com">
                  moseskoomenkunja@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-socials">
              <h4>Follow Us</h4>
              <div className="contact-social-icons">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://wa.me/254701707328"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>

          <div className="contact-message-box">
            <h2>Send Us a Message</h2>
            <p>
              For inquiries, partnerships, or to invite us to your school,
              please reach out via phone, email, or our social media channels.
            </p>
            <a href="mailto:moseskooomenkunja@gmail.co" className="btn btn-primary">
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
