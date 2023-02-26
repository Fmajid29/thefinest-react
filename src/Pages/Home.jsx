import React from "react";
import Options from "../Components/Options/Options";
import ItemSection from "../Components/ItemSection/ItemSection";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Videos from "../Components/Videos/Videos";

const Home = () => {
  return (
    <div className="homePage">

      <Header />
      <Options />
      <ItemSection />
      <Videos />
     
      <Footer />


    </div>
  );
};

export default Home;
