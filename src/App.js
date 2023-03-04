import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { app } from "./firebaseconfig";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Cart from "./Pages/Cart";
import TempFooter from "./Components/TempFooter/TempFooter";
import DealsPage from "./Pages/DealsPage";
import ReviewPage from "./Pages/ReviewPage";
import Login from "./Pages/Login";
import Privateroute from "./Components/Privateroute";
import AdminDashboard from "./Pages/AdminDashboard";

function App() {
  console.log(app);
  return (
    <div>
      <Router>
        <Navbar />
        <div className="supportbar">
          <h1>hello</h1>
        </div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/deals" element={<DealsPage />} />
          <Route exact path="/review" element={<ReviewPage />} />

          <Route exact path="/admin" element={<Privateroute />}>
            <Route exact path="dashboard" element={<AdminDashboard />} />
          </Route>
        </Routes>
        <TempFooter />
      </Router>
    </div>
  );
}
export default App;
