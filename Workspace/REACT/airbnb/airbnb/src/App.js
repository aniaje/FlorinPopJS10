import React from "react";
import Navbar from "./components/Navbar.js";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data.js";

const App = () => {
  const expData = data.map((experience) => {
    return <Card id={experience.id} experience={experience} />;
  });

  return (
    <>
      <Navbar />
      <Hero />
      <section className="cards-list">{expData}</section>
    </>
  );
};

export default App;
