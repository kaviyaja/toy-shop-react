import React from "react";

function Aboutpage() {
  return (
    <div>
      {/* Banner */}

      <section className="banner">
        <h2>About Us</h2>

        <p>Bringing Joy, Learning and Creativity to Every Child.</p>

        <img
          src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=900"
          width="900"
          height="350"
          alt="About Banner"
        />
      </section>

      <hr />

      {/* Our Story */}

      <section className="about">
        <h2>Our Story</h2>

        <img
          src="https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=350"
          alt="Our Story"
        />

        <p>
          Welcome to <b>Kaviya's Toy Shop</b>.
          <br />
          <br />
          Our journey started with one simple dream — to make every child's
          childhood more joyful through safe, educational and entertaining
          toys.
          <br />
          <br />
          We carefully select toys that inspire creativity, learning and
          happiness for children of every age.
        </p>
      </section>

      <hr />

      {/* Mission */}

      <section className="mission">
        <h2>Our Mission</h2>

        <ul>
          <li>Provide Safe Toys</li>
          <li>Affordable Prices</li>
          <li>Educational Learning Toys</li>
          <li>Excellent Customer Service</li>
        </ul>
      </section>

      <hr />

      {/* Vision */}

      <section className="vision">
        <h2>Our Vision</h2>

        <p>
          To become one of India's most trusted toy stores by offering premium
          quality toys that create unforgettable childhood memories.
        </p>
      </section>

      <hr />

      {/* Why Choose Us */}

      <section className="choose">
        <h2>Why Choose Us?</h2>

        <table>
          <tbody>
            <tr>
              <td>🧸 Premium Toys</td>
              <td>🚚 Fast Delivery</td>
            </tr>

            <tr>
              <td>💰 Best Prices</td>
              <td>⭐ Trusted Quality</td>
            </tr>

            <tr>
              <td>🎁 Gift Packing</td>
              <td>😊 Happy Customers</td>
            </tr>
          </tbody>
        </table>
      </section>

      <hr />

      {/* Statistics */}

      <section className="stats">
        <h2>Our Achievements</h2>

        <table>
          <tbody>
            <tr>
              <td>
                <h1>1000+</h1>
                Happy Customers
              </td>

              <td>
                <h1>250+</h1>
                Toy Collections
              </td>

              <td>
                <h1>5+</h1>
                Years Experience
              </td>

              <td>
                <h1>4.9★</h1>
                Customer Rating
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <hr />

      {/* Customer Reviews */}

      <section>
        <h2>Customer Reviews</h2>

        <p>
          ⭐⭐⭐⭐⭐
          <br />
          <br />
          "My kids absolutely love the educational toys!"
          <br />- Kaviya Jayakumar
        </p>

        <br />

        <p>
          ⭐⭐⭐⭐⭐
          <br />
          <br />
          "Excellent quality and very fast delivery."
          <br />- Rahul Rathinam
        </p>
      </section>
    </div>
  );
}

export default Aboutpage;