import Header from "./mycomponents/Header";
import React from "react";
import Category from "./mycomponents/Category";
import Footer from "./mycomponents/Footer";
import Brands from "./mycomponents/Brands";
import DemoCarousel from "./mycomponents/Carousel";

function App() {
  return (
    <>
      <Header />
      <DemoCarousel />
      <Category />
      <Brands />
      <Footer />
    </>
  );
}

export default App;
