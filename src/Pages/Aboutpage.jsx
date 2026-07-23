import React from "react";

function Aboutpage() {
  return (
    <div className="about-page">

      {/* Hero */}

      <section className="about-hero">

        <div className="about-content">

          <h1>About Kaviya's Toy Shop</h1>

          <p>
            Bringing smiles to children with safe, educational and premium
            quality toys since 2026.
          </p>

        </div>

      </section>

      {/* Our Story */}

      <section className="about-section">

        <div className="about-image">

          <img
            src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=700"
            alt="Toy Shop"
          />

        </div>

        <div className="about-text">

          <h2>Our Story</h2>

          <p>
            Kaviya's Toy Shop was started with one simple goal:
            to provide children with toys that are fun,
            educational and completely safe.

            We carefully select every product to ensure
            excellent quality and long-lasting enjoyment.
          </p>

        </div>

      </section>

      {/* Mission */}

      <section className="mission">

        <div className="mission-card">

          <h2>🎯 Our Mission</h2>

          <p>
            To inspire creativity and learning through high-quality toys.
          </p>

        </div>

        <div className="mission-card">

          <h2>🌍 Our Vision</h2>

          <p>
            To become India's most trusted online toy destination.
          </p>

        </div>

      </section>

      {/* Why Choose Us */}

      <section className="why-about">

        <h2>Why Choose Us?</h2>

        <div className="why-grid">

          <div className="why-card">
            <h3>✔ Premium Quality</h3>
            <p>Only the best products for your children.</p>
          </div>

          <div className="why-card">
            <h3>🚚 Fast Delivery</h3>
            <p>Quick delivery across India.</p>
          </div>

          <div className="why-card">
            <h3>💳 Secure Payment</h3>
            <p>Safe online payment methods.</p>
          </div>

          <div className="why-card">
            <h3>📞 Customer Support</h3>
            <p>Always ready to help you.</p>
          </div>

        </div>

      </section>

      {/* Statistics */}

      <section className="stats">

        <div className="stat-box">
          <h2>5000+</h2>
          <p>Happy Customers</p>
        </div>

        <div className="stat-box">
          <h2>300+</h2>
          <p>Toy Collections</p>
        </div>

        <div className="stat-box">
          <h2>25+</h2>
          <p>Brands</p>
        </div>

        <div className="stat-box">
          <h2>100%</h2>
          <p>Customer Satisfaction</p>
        </div>

      </section>

    </div>
  );
}

export default Aboutpage;