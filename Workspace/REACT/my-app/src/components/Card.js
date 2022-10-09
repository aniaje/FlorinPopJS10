import React from "react";
import style from "../style.css";
import CardPhoto from "../images/cardphoto.jpeg";
import Header from "./Header.js";
import InfoParagraph from "./InfoParagraph";
import Footer from "./Footer.js";

const Card = () => {
  return (
    <main className="card">
      <img src={CardPhoto} className="card-photo" />
      <Header />
      <InfoParagraph
        desc="I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn."
        title="About"
      />
      <InfoParagraph
        desc="Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic."
        title="Intrests"
      />
      <Footer />
    </main>
  );
};

export default Card;
