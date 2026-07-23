import React from "react";

function ProductCard({
  image,
  name,
  price,
  rating,
  onAddToCart,
}) {
  return (
    <div className="product-card">

      <div className="product-image">
        <img src={image} alt={name} />
      </div>

      <div className="product-info">
        <h3>{name}</h3>

        <p className="rating">{rating}</p>

        <h2>{price}</h2>

        <button onClick={onAddToCart}>
          Add to Cart
        </button>

      </div>

    </div>
  );
}

export default ProductCard;