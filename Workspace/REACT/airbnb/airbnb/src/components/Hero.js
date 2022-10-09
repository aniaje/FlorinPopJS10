import React from "react";
import HeroImg from "../images/Group-77.png";
import style from "../style.css";

const Hero = () => {
  return (
    <section className="hero">
      <img src={HeroImg} className="hero--img" />
      <h1 className="hero--title">Online Experiences</h1>
      <p className="hero--subtitle">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
};

export default Hero;
