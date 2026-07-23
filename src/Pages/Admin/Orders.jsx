import React from "react";
import Sidebar from "../../Components/Sidebar";
import "../../admin.css";
function Orders() {
  return (
    <div className="dashboard">

      <Sidebar />

      <div className="main-content">

        <div className="products-header">
          <h1>Orders Management</h1>
        </div>

        <div className="search-filter">

          <input
            type="text"
            placeholder="Search Order..."
          />

          <select>
            <option>All Status</option>
            <option>Pending</option>
            <option>Shipped</option>
            <option>Delivered</option>
          </select>

        </div>

        <table>

          <thead>

            <tr>

              <th>Order ID</th>

              <th>Customer</th>

              <th>Product</th>

              <th>Amount</th>

              <th>Status</th>

              <th>Action</th>

            </tr>

          </thead>

          <tbody>

            <tr>

              <td>#1001</td>

              <td>Kaviya</td>

              <td>Teddy Bear</td>

              <td>₹1000</td>

              <td>
                <span className="status delivered">
                  Delivered
                </span>
              </td>

              <td>
                <button className="view-btn">View</button>
              </td>

            </tr>

            <tr>

              <td>#1002</td>

              <td>Rahul</td>

              <td>Wooden Train</td>

              <td>₹1500</td>

              <td>
                <span className="status pending">
                  Pending
                </span>
              </td>

              <td>
                <button className="view-btn">View</button>
              </td>

            </tr>

            <tr>

              <td>#1003</td>

              <td>Priya</td>

              <td>Puzzle Cube</td>

              <td>₹799</td>

              <td>
                <span className="status shipped">
                  Shipped
                </span>
              </td>

              <td>
                <button className="view-btn">View</button>
              </td>

            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Orders;