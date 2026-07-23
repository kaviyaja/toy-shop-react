import React from "react";
import { Routes, Route } from "react-router-dom";

import Homepage from "../Pages/Homepage";
import Aboutpage from "../Pages/Aboutpage";
import Productspage from "../Pages/Productspage";
import Contactpage from "../Pages/Contactpage";
import Loginpage from "../Pages/Loginpage";
import Registerpage from "../Pages/Registerpage";
import Signup from "../Pages/signup";
import Dashboard from "../Pages/Admin/Dashboard";
import Products from "../Pages/Admin/Products";
import AddProduct from "../Pages/Admin/AddProduct";
import Orders from "../Pages/Admin/Orders";
import Users from "../Pages/Admin/Users";
import Settings from "../Pages/Admin/Settings";
import CartPage from "../Pages/CartPage";

function Approutes() {
  return (
    <Routes>

      <Route path="/" element={<Homepage />} />

      <Route path="/products" element={<Productspage />} />

      <Route path="/about" element={<Aboutpage />} />

      <Route path="/contact" element={<Contactpage />} />

      <Route path="/login" element={<Loginpage />} />

      <Route path="/register" element={<Registerpage />} />

      <Route path="/signup" element={<Signup />} />

      <Route path="/admin" element={<Dashboard />} />

      <Route path="/admin/products" element={<Products />} />

      <Route path="/admin/add-product" element={<AddProduct />} />

      <Route path="/admin/orders" element={<Orders />} />

      <Route path="/admin/users" element={<Users />} />

      <Route path="/admin/settings" element={<Settings />} />

      <Route path="/cart" element={<CartPage />} />

    </Routes>
  );
}

export default Approutes;