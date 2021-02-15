import React from "react";

import Accomp from "../components/accomplishment";

const AboutList = (props) => {
  return (
    <div className="about-list">
      <p className="title">{props.title}</p>
      {props.children}
    </div>
  );
};

export default AboutList;
