import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">

      <div className="logo">
        <Link to="/">🧸 Kaviya's Toy Shop</Link>
      </div>

      <nav>

        <ul className="nav-links">

          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/products">Products</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>

          <li>
            <Link to="/login">Login</Link>
          </li>

          <li>
            <Link to="/register">Register</Link>
          </li>

        </ul>

      </nav>

    </header>
  );
}

export default Navbar;