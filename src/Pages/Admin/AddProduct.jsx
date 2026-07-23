import React from "react";
import Sidebar from "../../Components/Sidebar";
import "../../admin.css";
function AddProduct() {
  return (
    <div className="dashboard">

      <Sidebar />

      <div className="main-content">

        <h1>Add New Product</h1>

        <form className="product-form">

          <label>Product Name</label>
          <input type="text" placeholder="Enter Product Name" />

          <label>Category</label>
          <select>
            <option>Soft Toys</option>
            <option>Wooden Toys</option>
            <option>Educational Toys</option>
            <option>Remote Control Toys</option>
            <option>Baby Toys</option>
          </select>

          <label>Price</label>
          <input type="number" placeholder="Enter Price" />

          <label>Stock Quantity</label>
          <input type="number" placeholder="Enter Stock" />

          <label>Product Image</label>
          <input type="file" />

          <label>Description</label>
          <textarea
            rows="5"
            placeholder="Enter Product Description"
          ></textarea>

          <button type="submit">
            Save Product
          </button>

        </form>

      </div>

    </div>
  );
}

export default AddProduct;