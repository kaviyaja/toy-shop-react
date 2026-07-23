import React from "react";
import Sidebar from "../../Components/Sidebar";
import "../../admin.css";

function Dashboard() {
  return (
    <div className="dashboard">

      <Sidebar />

      <div className="main-content">

        <div className="topbar">
          <h2>Admin Dashboard</h2>

          <div className="admin-profile">
            <span>Admin</span>
          </div>
        </div>

        <div className="cards">

          <div className="card">
            <h3>Total Products</h3>
            <h1>120</h1>
          </div>

          <div className="card">
            <h3>Total Orders</h3>
            <h1>75</h1>
          </div>

          <div className="card">
            <h3>Total Users</h3>
            <h1>320</h1>
          </div>

          <div className="card">
            <h3>Revenue</h3>
            <h1>₹2,45,000</h1>
          </div>

        </div>

        <div className="table-box">

          <h2>Recent Products</h2>

          <table>

            <thead>
              <tr>
                <th>Product</th>
                <th>Category</th>
                <th>Price</th>
                <th>Stock</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>Teddy Bear</td>
                <td>Soft Toy</td>
                <td>₹1000</td>
                <td>25</td>
              </tr>

              <tr>
                <td>Wooden Train</td>
                <td>Wooden Toy</td>
                <td>₹1500</td>
                <td>18</td>
              </tr>

              <tr>
                <td>Puzzle Cube</td>
                <td>Educational</td>
                <td>₹799</td>
                <td>32</td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;