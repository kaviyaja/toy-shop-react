import React from "react";
import Sidebar from "../../Components/Sidebar";
import "../../admin.css";
function Users() {
  return (
    <div className="dashboard">

      <Sidebar />

      <div className="main-content">

        <div className="topbar">
          <h2>Users Management</h2>
        </div>

        <div className="table-box">

          <h2>Registered Users</h2>

          <table>

            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>1</td>
                <td>Kaviya</td>
                <td>kaviya@gmail.com</td>
                <td>9876543210</td>
                <td>Active</td>
              </tr>

              <tr>
                <td>2</td>
                <td>Rahul</td>
                <td>rahul@gmail.com</td>
                <td>9876501234</td>
                <td>Active</td>
              </tr>

              <tr>
                <td>3</td>
                <td>Priya</td>
                <td>priya@gmail.com</td>
                <td>9123456789</td>
                <td>Inactive</td>
              </tr>

              <tr>
                <td>4</td>
                <td>Arun</td>
                <td>arun@gmail.com</td>
                <td>9988776655</td>
                <td>Active</td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default Users;