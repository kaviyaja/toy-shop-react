import React from "react";

function Contactpage() {
  return (
    <div className="contact-page">

      {/* Hero Section */}

      <section className="contact-hero">

        <h1>Contact Us</h1>

        <p>
          We'd love to hear from you. Reach out to us anytime!
        </p>

      </section>

      {/* Contact Cards */}

      <section className="contact-cards">

        <div className="contact-card">

          <div className="contact-icon">📍</div>

          <h3>Address</h3>

          <p>
            Kaviya's Toy Shop<br />
            Madurai, Tamil Nadu<br />
            India
          </p>

        </div>

        <div className="contact-card">

          <div className="contact-icon">📞</div>

          <h3>Phone</h3>

          <p>+91 9876543210</p>

        </div>

        <div className="contact-card">

          <div className="contact-icon">📧</div>

          <h3>Email</h3>

          <p>kaviya@toyshop.com</p>

        </div>

      </section>

      {/* Contact Form */}

      <section className="contact-container">

        <div className="contact-form">

          <h2>Send us a Message</h2>

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <input
            type="text"
            placeholder="Subject"
          />

          <textarea
            rows="6"
            placeholder="Write your message..."
          ></textarea>

          <button>
            Send Message
          </button>

        </div>

        <div className="contact-image">

          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=700"
            alt="Customer Support"
          />

        </div>

      </section>

      {/* Map */}

      <section className="map-section">

        <h2>Find Us</h2>

        <iframe
          title="map"
          src="https://maps.google.com/maps?q=Madurai&t=&z=13&ie=UTF8&iwloc=&output=embed"
        ></iframe>

      </section>

    </div>
  );
}

export default Contactpage;