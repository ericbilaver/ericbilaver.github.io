import React from "react";
import LI from "/home/eric/Code/portfolio1.1/src/images/LI-white.png";
import GH from "/home/eric/Code/portfolio1.1/src/images/GH-white.png";

const Footer = () => {
  return (
    <footer>
      <div className="images">
        <img alt="LinkedIn" src={LI} />
        <img alt="GitHub" src={GH} />
      </div>
      <p>Eric Bilaver 2021</p>
    </footer>
  );
};

export default Footer;
