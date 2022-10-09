import React from "react";
import style from "../style.css";
import { FaTiktok } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <FaTiktok className="icon-footer" />
        <FaGithub className="icon-footer" />
        <FaInstagram className="icon-footer" />
        <FaTwitter className="icon-footer" />
      </div>
    </>
  );
};

export default Footer;
