import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Cart from "./Pages/Cart";
import TempFooter from "./Components/TempFooter/TempFooter";


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <div className="supportbar">
          <h1>hello</h1>
        </div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
        <TempFooter/>
      </Router>
    </div>
  );
}
export default App;
