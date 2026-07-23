import React from "react";
import Sidebar from "../../Components/Sidebar";
import "../../admin.css";
function Settings() {
  return (
    <div className="dashboard">

      <Sidebar />

      <div className="main-content">

        <div className="topbar">
          <h2>Store Settings</h2>
        </div>

        <div className="product-form">

          <h2>Shop Information</h2>

          <label>Shop Name</label>
          <input
            type="text"
            defaultValue="Kaviya's Toy Shop"
          />

          <label>Email</label>
          <input
            type="email"
            defaultValue="support@kaviyatoyshop.com"
          />

          <label>Phone</label>
          <input
            type="text"
            defaultValue="+91 9876543210"
          />

          <label>Address</label>
          <textarea
            rows="4"
            defaultValue="Madurai, Tamil Nadu"
          />

          <button>Save Settings</button>

        </div>

      </div>

    </div>
  );
}

export default Settings;