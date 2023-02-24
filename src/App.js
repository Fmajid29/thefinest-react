import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Options from "./Components/Options/Options";
import ItemSection from "./Components/ItemSection/ItemSection";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Videos from "./Components/Videos/Videos";
function App() {
  return (

    <div>
      <Navbar />

      <div className="page">
        <Header />
        <Options />
        <ItemSection />
        <Videos />
        <Footer />
      </div>
    </div>
  );
}

export default App;
