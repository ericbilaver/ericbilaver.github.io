import React from "react";
import headShot from "../images/headshot.jpeg";
import brain from "../images/brain.png";
import people from "../images/people.png";
import muscle from "../images/muscle.jpg";
import "../styles/styles.scss";

const AboutMe = () => {
  return (
    <div className="about-me">
      <img src={headShot} alt="headshot" />
      <p className="init-title">Hi, I'm Eric</p>
      <p className="body1">
        I'm a 2nd year computer engineer at the University of Waterloo
      </p>
      <div className="skills">
        <p className="title">Skills</p>
        <hr />
        <div className="skills-table">
          <div className="skill">
            <p className="title">
              Problem
              <br />
              Solving
            </p>
            <img src={brain} alt="Problem Solving" />
            <p className="skill-text">
              Love to find and work toward solutions to complex problems
            </p>
          </div>
          <div className="skill">
            <p className="title">Collaboration</p>
            <img src={people} alt="Collaboration" />
            <p className="skill-text">
              Working with others to create something bigger
            </p>
          </div>
          <div className="skill">
            <p className="title">Work Ethic</p>
            <img src={muscle} alt="Work Ethic" />
            <p className="skill-text">
              Putting quality first and not stopping until it's the best it can
              be
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
/*

<div className="about-me">
      <img src={headShot} alt="headshot" />
    </div>
*/
