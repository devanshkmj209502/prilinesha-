import contactBg from "../assets/anpr.png";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-wrapper">

      {/* ===== TOP HERO BANNER ===== */}
      <div
        className="contact-hero"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(10,25,47,0.85), rgba(0,150,170,0.7)), url(${contactBg})`
        }}
      >
        <div className="hero-text">
          <h1>Get in touch</h1>
          <p>
            Want to get in touch? We'd love to hear from you.
            Here's how you can reach us.
          </p>
        </div>
      </div>

      {/* ===== CONTACT CARDS ===== */}
      <div className="contact-card-section">

        <div className="contact-card">
          <div className="card-icon">📞</div>
          <h3>Talk to Sales</h3>
          <p>
            Interested in our ANPR or RFID solutions?
            Just pick up the phone to talk with our sales team.
          </p>

          {/* Clickable phone number */}
          <a href="tel:+919876543210" className="phone">
            +91 9876543210
          </a>

        </div>

        <div className="contact-card">
          <div className="card-icon">💬</div>
          <h3>Contact Customer Support</h3>
          <p>
            Sometimes you need help from our support team.
            Don’t worry, we’re here for you.
          </p>

          <a href="mailto:support@prilinesha.com" className="btn-support">
            Contact Support
          </a>

        </div>

      </div>

    </section>
  );
}

export default Contact;
