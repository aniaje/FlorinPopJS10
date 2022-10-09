import React from "react";
import Navbar from "./components/Navbar.js";
import Hero from "./components/Hero";
import Card from "./components/Card";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Card
        name="active activities led by o"
        score="7.0"
        image="image-12.png"
        price={126}
        country="Poland"
        reviewCount="3.0"
      />
    </>
  );
};

export default App;
