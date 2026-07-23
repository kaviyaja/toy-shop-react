import React from "react";
import ProductCard from "../Components/ProductCard";
import { useNavigate } from "react-router-dom";

function Productspage() {
  const navigate = useNavigate();

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
      name: "Remote Control Car",
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
  ];

  // Add product to cart
  const handleAddToCart = (product) => {
    const existingCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    existingCart.push(product);

    localStorage.setItem(
      "cart",
      JSON.stringify(existingCart)
    );

    alert(`${product.name} added to cart!`);

    navigate("/cart");
  };

  return (
    <div className="products-page">
      <div className="products-banner">
        <h1>Our Toy Collection</h1>

        <p>
          Explore premium quality toys for children of every age.
        </p>
      </div>

      <div className="products-search">
        <input
          type="text"
          placeholder="Search your favourite toy..."
        />

        <select>
          <option>All Categories</option>
          <option>Soft Toys</option>
          <option>Wooden Toys</option>
          <option>Educational</option>
          <option>Baby Toys</option>
        </select>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            rating={product.rating}
            onAddToCart={() => handleAddToCart(product)}
          />
        ))}
      </div>
    </div>
  );
}

export default Productspage;