import React from "react";
import Header from "../components/header";
import Resume from "../images/EricResumeWaterloo2A2.0.pdf";
import LI from "/home/eric/Code/portfolio1.1/src/images/LI-In-Bug.png";
import GH from "../images/GH.png";

const Contact = () => {
  return (
    <html>
      <Header />
      <div className="contact-container">
        <h1>Say Hi!</h1>
        <p className="contact-text">
          Right now, I'm looking for an internship for Summer 2021. Feel free to
          reach out if you have any questions!{" "}
        </p>

        <br />
        <a className="resume-link" href={Resume}>
          My Resume
        </a>
        <br />
        <a className="email" href="ericbilaver@gmail.com">
          ericbilaver@gmail.com
        </a>
        <br />
        <br />
        <a href="https://www.linkedin.com/in/ericbilaver/">
          <img classname="image" src={LI} />
        </a>
        <br />
        <br />
        <a href="https://github.com/ericbilaver">
          <img classname="image" src={GH} />
        </a>
      </div>
    </html>
  );
};
export default Contact;
