import React from "react";
import LI from "../images/LI-white.png";
import GH from "../images/GH-white.png";

const Footer = () => {
  return (
    <footer>
      <div className="images">
        <div>
          <a href="https://www.linkedin.com/in/ericbilaver/">
            <img alt="LinkedIn" src={LI} />
          </a>
        </div>
        <div>
          <a href="https://github.com/ericbilaver">
            <img alt="GitHub" src={GH} />
          </a>
        </div>
      </div>
      <p>Eric Bilaver 2021</p>
      <br />
    </footer>
  );
};

export default Footer;
