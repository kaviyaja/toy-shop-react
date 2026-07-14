import React from "react";

function ProductCard({ image, name, price, rating }) {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
      <div className="card h-100 shadow">

        <img
          src={image}
          className="card-img-top"
          alt={name}
          style={{ height: "220px", objectFit: "cover" }}
        />

        <div className="card-body text-center">

          <h5>{name}</h5>

          <p className="fw-bold">{price}</p>

          <p>{rating}</p>

          <button className="btn btn-primary">
            Add to Cart
          </button>

        </div>
      </div>
    </div>
  );
}

export default ProductCard;