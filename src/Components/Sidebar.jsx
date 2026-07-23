import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">

      <h2>Toy Shop</h2>

      <ul>

        <li><Link to="/admin">🏠 Dashboard</Link></li>

        <li><Link to="/admin/products">📦 Products</Link></li>

        <li><Link to="/admin/add-product">➕ Add Product</Link></li>

        <li><Link to="/admin/orders">🛒 Orders</Link></li>

        <li><Link to="/admin/users">👥 Users</Link></li>

        <li><Link to="/admin/settings">⚙ Settings</Link></li>

        <li><Link to="/">🚪 Logout</Link></li>

      </ul>

    </div>
  );
}

export default Sidebar;