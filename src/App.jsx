import { useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Approutes from "./Routes/Approutes";
import "./App.css";

function App() {
  const location = useLocation();

  const isAdmin = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdmin && <Navbar />}

      <Approutes />

      {!isAdmin && <Footer />}
    </>
  );
}

export default App;