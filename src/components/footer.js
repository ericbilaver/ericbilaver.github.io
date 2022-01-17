import React from "react";
import LI from "../images/LI-white.png";
import GH from "../images/GH-white.png";

const Footer = () => {
  return (
    <footer>
      <div className="images">
        <img alt="LinkedIn" src={LI} />
        <img alt="GitHub" src={GH} />
      </div>
      <p>Eric Bilaver 2021</p>
      <br />
    </footer>
  );
};

export default Footer;
