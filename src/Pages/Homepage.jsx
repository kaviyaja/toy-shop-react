import React from "react";

function Homepage() {
  return (
    <>

      {/* Hero Section */}

      <section className="hero">

        <div className="hero-text">

          <h1>Welcome to Kaviya's Toy Shop</h1>

          <p>
            Discover safe, educational and premium quality toys for children of
            every age. Bring happiness home with our amazing collection.
          </p>

          <button className="shop-btn">
            Shop Now
          </button>

        </div>

        <div className="hero-image">

          <img
            src="https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=900"
            alt="Toy Shop"
          />

        </div>

      </section>

      {/* Categories */}

      <section className="categories">

        <h2>Shop by Categories</h2>

        <div className="category-grid">

          <div className="category-card">

            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgJAdVMsxWj221zGsVzyOERdDcfRa4EeWRXMsKWez_qA&s=10"
              alt="Teddy Bear"
            />

            <h3>Teddy Bears</h3>

          </div>

          <div className="category-card">

            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxmfRh1WakCCNDfhjohiMMH9D-quXFNH1UOwGm_gpj-G44zVM1I609vsRQ&s=10"
              alt="Wooden Toys"
            />

            <h3>Wooden Toys</h3>

          </div>

          <div className="category-card">

            <img
              src="https://www.mystore.in/s/62ea2c599d1398fa16dbae0a/66d95c2af77e24003ac75d84/81v8-kar-sqv-l-sl1500-3-.jpg"
              alt="Puzzle Toys"
            />

            <h3>Puzzle Toys</h3>

          </div>

          <div className="category-card">

            <img
              src="https://storio.in/cdn/shop/files/61tCyalILiL.jpg?v=1712376510"
              alt="Baby Toys"
            />

            <h3>Baby Toys</h3>

          </div>

        </div>

      </section>

      {/* Featured Products */}

      <section className="featured-products">

        <h2>Featured Products</h2>

        <div className="product-row">

          <div className="product-box">

            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsXgRLxKTyvZITWWiSQlawIUb5QE26BPIxBrw9fMQ9fSE29qJVjZiTNRQ&s=10"
              alt="Teddy Bear"
            />

            <h3>Teddy Bear</h3>

            <p>₹1000</p>

            <button>Add to Cart</button>

          </div>

          <div className="product-box">

            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_vgtjthfMvfJuQ2cRcU8i2t0UWLT2AYzglc7J9vq3tDKX-dzDEURfojfY&s=10"
              alt="Wooden Toy"
            />

            <h3>Wooden Toy</h3>

            <p>₹2500</p>

            <button>Add to Cart</button>

          </div>

          <div className="product-box">

            <img
              src="https://www.mystore.in/s/62ea2c599d1398fa16dbae0a/66d95c2af77e24003ac75d84/81v8-kar-sqv-l-sl1500-3-.jpg"
              alt="Puzzle Toy"
            />

            <h3>Puzzle Toy</h3>

            <p>₹350</p>

            <button>Add to Cart</button>

          </div>

          <div className="product-box">

            <img
              src="https://5.imimg.com/data5/SELLER/Default/2025/1/484828153/RC/NT/ZF/131989713/electric-baby-swing-cradle-with-remote-control-500x500.jpg"
              alt="Baby Swing"
            />

            <h3>Baby Swing</h3>

            <p>₹10099</p>

            <button>Add to Cart</button>

          </div>

        </div>

      </section>

      {/* Why Choose Us */}

      <section className="why-us">

        <h2>Why Choose Us?</h2>

        <div className="why-grid">

          <div>✔ Premium Quality Toys</div>

          <div>✔ Safe For Children</div>

          <div>✔ Affordable Prices</div>

          <div>✔ Fast Delivery</div>

        </div>

      </section>

      {/* Reviews */}

      <section className="reviews">

        <h2>Customer Reviews</h2>

        <div className="review-container">

          <div className="review-card">

            <h4>Kaviya Jayakumar</h4>

            <p>⭐⭐⭐⭐⭐</p>

            <p>
              Amazing quality toys. My daughter loves them.
            </p>

          </div>

          <div className="review-card">

            <h4>Rahul Rathinam</h4>

            <p>⭐⭐⭐⭐⭐</p>

            <p>
              Excellent service and affordable prices.
            </p>

          </div>

        </div>

      </section>

    </>
  );
}

export default Homepage;