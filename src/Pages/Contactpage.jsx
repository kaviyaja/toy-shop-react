import React from "react";

function Contactpage() {
  return (
    <div className="container my-5">

      {/* Banner */}

      <section className="banner text-center">

        <h2>Contact Us</h2>

        <p>We're always happy to hear from you.</p>

        <img
          src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=900"
          alt="Contact Banner"
          width="900"
          height="350"
          className="img-fluid"
        />

      </section>

      <hr />

      {/* Contact Form */}

      <section className="contact-section">

        <h2>Send Us a Message</h2>

        <form>

          <div className="mb-3">

            <label className="form-label">
              Name
            </label>

            <input
              type="text"
              className="form-control"
            />

          </div>

          <div className="mb-3">

            <label className="form-label">
              Email
            </label>

            <input
              type="email"
              className="form-control"
            />

          </div>

          <div className="mb-3">

            <label className="form-label">
              Phone Number
            </label>

            <input
              type="tel"
              className="form-control"
            />

          </div>

          <div className="mb-3">

            <label className="form-label">
              Subject
            </label>

            <input
              type="text"
              className="form-control"
            />

          </div>

          <div className="mb-3">

            <label className="form-label">
              Message
            </label>

            <textarea
              rows="6"
              className="form-control"
            ></textarea>

          </div>

          <button className="btn btn-primary">
            Send Message
          </button>

        </form>

      </section>

      <hr />

      {/* Store Information */}

      <section className="store-info">

        <h2>Store Information</h2>

        <p><strong>📍 Address:</strong> Madurai, Tamil Nadu</p>

        <p><strong>📞 Phone:</strong> +91 9876543210</p>

        <p><strong>📧 Email:</strong> support@kaviyatoyshop.com</p>

        <p>
          <strong>🕘 Working Hours:</strong>
          {" "}
          Monday - Saturday (9:00 AM - 7:00 PM)
        </p>

      </section>

      <hr />

      {/* Social Media */}

      <section className="follow">

        <h2>Follow Us</h2>

        <p>📘 Facebook</p>

        <p>📷 Instagram</p>

        <p>▶ YouTube</p>

        <p>🐦 Twitter</p>

      </section>

    </div>
  );
}

export default Contactpage;