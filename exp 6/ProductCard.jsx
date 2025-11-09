import React from "react";
import "./ProductCard.css";

function ProductCard({ name, price, inStock }) {
  return (
    <div className="product-card">
      <h2 className="product-name">{name}</h2>
      <p className="product-price">💰 Price: ₹{price}</p>
      <p
        className={`product-stock ${inStock ? "in-stock" : "out-of-stock"}`}
      >
        {inStock ? "✅ In Stock" : "❌ Out of Stock"}
      </p>
    </div>
  );
}

export default ProductCard;
