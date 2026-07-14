import React from "react";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Approutes from "./Routes/Approutes";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Assets/style.css";

function App() {
  return (
    <>

      <Navbar />

      <Approutes />

      <Footer />

    </>
  );
}

export default App;