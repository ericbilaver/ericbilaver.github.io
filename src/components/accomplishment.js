import React from "react";

const Accomp = (props) => {
  return (
    <div className="accomplishment">
      <img src={props.pictureName} alt="Company" className="picture" />
      <div className="text-field">
        <p className="title">{props.title}</p>
        <p className="dates">{props.dates}</p>
        <p className="description">{props.desc}</p>
      </div>
    </div>
  );
};

export default Accomp;
