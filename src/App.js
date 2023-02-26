import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./Pages/Home";
// import SelectOrder from "./Pages/SelectOrder";
// import Cart from "./Pages/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Cart from "./Pages/Cart";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/footer" element={<Footer />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
