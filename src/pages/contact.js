import React from "react";
import Header from "../components/header";
import Resume from "../images/EricResumeWaterloo2B2.0.pdf";
import LI from "/home/eric/Code/portfolio1.1/src/images/LI-In-Bug.png";
import GH from "../images/GH.png";

const Contact = () => {
  return (
    <html lang="EN">
      <title>Contact</title>
      <Header />
      <div className="contact-container">
        <h1>Say Hi!</h1>
        <p className="contact-text">
          Feel free to reach out if you have any questions!{" "}
        </p>

        <br />
        <a className="resume-link" href={Resume}>
          My Resume
        </a>
        <br />
        <a className="email" href="mailto:ericbilaver@gmail.com">
          ericbilaver@gmail.com
        </a>
        <br />
        <br />
        <a href="https://www.linkedin.com/in/ericbilaver/">
          <img classname="image" alt="LinkedIn" src={LI} />
        </a>
        <br />
        <br />
        <a href="https://github.com/ericbilaver">
          <img classname="image" alt="GitHub" src={GH} />
        </a>
      </div>
    </html>
  );
};
export default Contact;
