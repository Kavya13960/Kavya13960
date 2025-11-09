import React from "react";
import ProductCard from "./ProductCard";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Product List</h1>

      {/* Passing props to ProductCard */}
      <div className="product-container">
        <ProductCard name="Wireless Mouse" price={799} inStock={true} />
        <ProductCard name="Bluetooth Headphones" price={1299} inStock={false} />
        <ProductCard name="Mechanical Keyboard" price={2499} inStock={true} />
      </div>
    </div>
  );
}

export default App;
