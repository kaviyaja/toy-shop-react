import React from "react";

function Homepage() {
  return (
    <div className="container mt-4">

      {/* Hero Section */}
      <section className="text-center">

        <h2>Welcome to Kaviya's Toy Shop</h2>

        <img
          src="https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=700"
          alt="Toy Shop Banner"
          width="700"
          height="300"
          className="img-fluid"
        />

        <p className="mt-3">
          Discover fun, educational and safe toys for children of all ages.
        </p>

        <button className="btn btn-primary">
          Shop Now
        </button>

      </section>

      <hr />

      {/* Categories */}
      <section>

        <h2 className="text-center mb-4">
          Shop by Categories
        </h2>

        <div className="row text-center">

          <div className="col-md-3">

            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgJAdVMsxWj221zGsVzyOERdDcfRa4EeWRXMsKWez_qA&s=10"
              width="150"
              height="150"
              alt="Teddy Bears"
            />

            <p className="mt-2">Teddy Bears</p>

          </div>

          <div className="col-md-3">

            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxmfRh1WakCCNDfhjohiMMH9D-quXFNH1UOwGm_gpj-G44zVM1I609vsRQ&s=10"
              width="150"
              height="150"
              alt="Wooden Toys"
            />

            <p className="mt-2">Wooden Toys</p>

          </div>

          <div className="col-md-3">

            <img
              src="https://www.mystore.in/s/62ea2c599d1398fa16dbae0a/66d95c2af77e24003ac75d84/81v8-kar-sqv-l-sl1500-3-.jpg"
              width="150"
              height="150"
              alt="Puzzle Toys"
            />

            <p className="mt-2">Puzzle Toys</p>

          </div>

          <div className="col-md-3">

            <img
              src="https://storio.in/cdn/shop/files/61tCyalILiL.jpg?v=1712376510"
              width="150"
              height="150"
              alt="Baby Toys"
            />

            <p className="mt-2">Baby Toys</p>

          </div>

        </div>

      </section>

      <hr />

      {/* Featured Products */}

      <section>

        <h2 className="text-center mb-4">
          Featured Products
        </h2>

        <div className="row text-center">

          <div className="col-md-3">

            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsXgRLxKTyvZITWWiSQlawIUb5QE26BPIxBrw9fMQ9fSE29qJVjZiTNRQ&s=10"
              width="180"
              height="180"
              alt="Teddy Bear"
            />

            <h5 className="mt-2">Teddy Bear</h5>

            <p>Price : ₹1000</p>

            <button className="btn btn-success">
              Add to Cart
            </button>

          </div>

          <div className="col-md-3">

            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_vgtjthfMvfJuQ2cRcU8i2t0UWLT2AYzglc7J9vq3tDKX-dzDEURfojfY&s=10"
              width="180"
              height="180"
              alt="Wooden Crane"
            />

            <h5 className="mt-2">Wooden Crane</h5>

            <p>Price : ₹3050</p>

            <button className="btn btn-success">
              Add to Cart
            </button>

          </div>

          <div className="col-md-3">

            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/049/501/402/small/colorful-alphabet-toy-blocks-forming-a-cube-on-white-background-photo.jpg"
              width="180"
              height="180"
              alt="Educational Cube"
            />

            <h5 className="mt-2">Educational Cube</h5>

            <p>Price : ₹290</p>

            <button className="btn btn-success">
              Add to Cart
            </button>

          </div>

          <div className="col-md-3">

            <img
              src="https://5.imimg.com/data5/SELLER/Default/2025/1/484828153/RC/NT/ZF/131989713/electric-baby-swing-cradle-with-remote-control-500x500.jpg"
              width="180"
              height="180"
              alt="Baby Swing"
            />

            <h5 className="mt-2">Baby Swing</h5>

            <p>Price : ₹10099</p>

            <button className="btn btn-success">
              Add to Cart
            </button>

          </div>

        </div>

      </section>

      <hr />

      {/* Best Sellers */}

      <section>

        <h2>Best Sellers</h2>

        <ul>
          <li>Teddy Bear</li>
          <li>Wooden Train</li>
          <li>Building Blocks</li>
          <li>Baby Swing</li>
          <li>Puzzle Game</li>
        </ul>

      </section>

      <hr />

      {/* Why Choose Us */}

      <section>

        <h2>Why Choose Us?</h2>

        <ul>
          <li>✔ Safe and Non-Toxic Toys</li>
          <li>✔ Premium Quality Products</li>
          <li>✔ Affordable Prices</li>
          <li>✔ Fast Delivery</li>
          <li>✔ Excellent Customer Support</li>
        </ul>

      </section>

      <hr />

      {/* Reviews */}

      <section>

        <h2>Customer Reviews</h2>

        <p>⭐⭐⭐⭐⭐</p>

        <p>"Amazing quality toys. My daughter loves them!"</p>

        <p><strong>- Kaviya Jayakumar</strong></p>

        <br />

        <p>⭐⭐⭐⭐⭐</p>

        <p>"Very good service and affordable prices."</p>

        <p><strong>- Rahul Rathinam</strong></p>

      </section>

    </div>
  );
}

export default Homepage;