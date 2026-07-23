import React from "react";
import Sidebar from "../../Components/Sidebar";
import "../../admin.css";
function Products() {
  return (
    <div className="dashboard">

      <Sidebar />
    <div className="main-content">

      <div className="products-header">

        <h1>Products</h1>

        <button className="add-btn">
          + Add Product
        </button>

      </div>

      <div className="search-filter">

        <input
          type="text"
          placeholder="Search Product..."
        />

        <select>

          <option>All Categories</option>

          <option>Soft Toys</option>

          <option>Wooden Toys</option>

          <option>Puzzles</option>

          <option>Educational</option>

        </select>

      </div>

      <table>

        <thead>

          <tr>

            <th>Image</th>

            <th>Product</th>

            <th>Category</th>

            <th>Price</th>

            <th>Stock</th>

            <th>Action</th>

          </tr>

        </thead>

        <tbody>

          <tr>

            <td>
              <img
                className="product-img"
                src="https://images.unsplash.com/photo-1563901935883-cb2f3fdfe5f1?w=200"
                alt=""
              />
            </td>

            <td>Teddy Bear</td>

            <td>Soft Toy</td>

            <td>₹1000</td>

            <td>25</td>

            <td>

              <button className="edit-btn">
                Edit
              </button>

              <button className="delete-btn">
                Delete
              </button>

            </td>

          </tr>

          <tr>

            <td>
              <img
                className="product-img"
                src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=200"
                alt=""
              />
            </td>

            <td>Wooden Train</td>

            <td>Wooden Toy</td>

            <td>₹1500</td>

            <td>15</td>

            <td>

              <button className="edit-btn">
                Edit
              </button>

              <button className="delete-btn">
                Delete
              </button>

            </td>

          </tr>

          <tr>

            <td>
              <img
                className="product-img"
                src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=200"
                alt=""
              />
            </td>

            <td>Puzzle Cube</td>

            <td>Educational</td>

            <td>₹599</td>

            <td>40</td>

            <td>

              <button className="edit-btn">
                Edit
              </button>

              <button className="delete-btn">
                Delete
              </button>

            </td>

          </tr>

        </tbody>

      </table>

    </div>
</div>
  );
}

export default Products;