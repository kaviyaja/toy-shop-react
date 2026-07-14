import React from "react";
import ProductCard from "../Components/ProductCard";

function Productspage() {
  const products = [
    {
      id: 1,
      name: "Teddy Bear",
      price: "₹1000",
      rating: "⭐⭐⭐⭐⭐",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsXgRLxKTyvZITWWiSQlawIUb5QE26BPIxBrw9fMQ9fSE29qJVjZiTNRQ&s=10",
    },
    {
      id: 2,
      name: "Wooden Train",
      price: "₹1500",
      rating: "⭐⭐⭐⭐⭐",
      image:
        "https://m.media-amazon.com/images/I/71P8vG1qMcL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 3,
      name: "Building Blocks",
      price: "₹799",
      rating: "⭐⭐⭐⭐⭐",
      image:
        "https://www.onlin.in/public/images/kidzone/products/65fe6981653de-6694ffc106367.jpg",
    },
    {
      id: 4,
      name: "RC Car",
      price: "₹2200",
      rating: "⭐⭐⭐⭐☆",
      image:
        "https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/original/ralleyz/492408264/0/zztzmtnni9-492408264-1_4043.webp",
    },
    {
      id: 5,
      name: "Baby Rattle",
      price: "₹350",
      rating: "⭐⭐⭐⭐⭐",
      image:
        "https://toyshine.in/cdn/shop/products/B08R9LTYL9_1_1024x1024@2x.jpg?v=1664874521",
    },
    {
      id: 6,
      name: "Alphabet Blocks",
      price: "₹650",
      rating: "⭐⭐⭐⭐⭐",
      image:
        "https://enablemart.in/wp-content/uploads/2025/05/blocks-1.jpg",
    },
    {
      id: 7,
      name: "Barbie Doll",
      price: "₹1800",
      rating: "⭐⭐⭐⭐⭐",
      image:
        "https://images.jdmagicbox.com/quickquotes/images_main/barbie_doll_accessories_cdb20__17199937_0.jpg",
    },
    {
      id: 8,
      name: "Kitchen Set",
      price: "₹2800",
      rating: "⭐⭐⭐⭐⭐",
      image:
        "https://m.media-amazon.com/images/I/81lSlrKGJjL.jpg",
    },
    {
      id: 9,
      name: "Dinosaur Toy",
      price: "₹950",
      rating: "⭐⭐⭐⭐☆",
      image:
        "https://www.crossword.in/cdn/shop/products/crosswordonline-toys-games-default-title-mirada-30cm-embroidered-dinosaur-soft-toy-green-mp0587a-40406906372313.jpg?v=1776687916",
    },
    {
      id: 10,
      name: "Toy Helicopter",
      price: "₹1999",
      rating: "⭐⭐⭐⭐⭐",
      image:
        "https://sellet.in/wp-content/uploads/2021/12/IMG20211210222331.jpg",
    },
    {
      id: 11,
      name: "Wooden Toy",
      price: "₹2500",
      rating: "⭐⭐⭐⭐⭐",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_vgtjthfMvfJuQ2cRcU8i2t0UWLT2AYzglc7J9vq3tDKX-dzDEURfojfY&s=10",
    },
    {
      id: 12,
      name: "Puzzle Toy",
      price: "₹350",
      rating: "⭐⭐⭐⭐☆",
      image:
        "https://www.mystore.in/s/62ea2c599d1398fa16dbae0a/66d95c2af77e24003ac75d84/81v8-kar-sqv-l-sl1500-3-.jpg",
    },
  ];

  return (
    <div className="container my-5">
      <section className="product-banner text-center mb-5">
        <h1>Our Products</h1>

        <p>Discover fun, educational and premium quality toys for kids.</p>

        <div className="d-flex justify-content-center mt-3">
          <input
            type="text"
            className="form-control w-50"
            placeholder="Search your favourite toy..."
          />

          <button className="btn btn-primary ms-2">
            Search
          </button>
        </div>
      </section>

      <section className="product-grid">
        <div className="row">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              rating={product.rating}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Productspage;