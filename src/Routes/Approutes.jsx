import React from "react";
import { Routes, Route } from "react-router-dom";

import Homepage from "../Pages/Homepage";
import Aboutpage from "../Pages/Aboutpage";
import Productspage from "../Pages/Productspage";
import Contactpage from "../Pages/Contactpage";
import Loginpage from "../Pages/Loginpage";
import Registerpage from "../Pages/Registerpage";

function Approutes() {
  return (
    <Routes>

      <Route path="/" element={<Homepage />} />

      <Route path="/products" element={<Productspage />} />

      <Route path="/about" element={<Aboutpage />} />

      <Route path="/contact" element={<Contactpage />} />

      <Route path="/login" element={<Loginpage />} />

      <Route path="/register" element={<Registerpage />} />

    </Routes>
  );
}

export default Approutes;