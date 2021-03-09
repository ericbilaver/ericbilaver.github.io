import React from "react";

const Accomp = (props) => {
  let descArray = props.desc; //array of indiv. strings

  return (
    <div className="accomplishment">
      <a href={props.link}>
        <img src={props.pictureName} alt="Company" className="picture" />
      </a>
      <div className="text-field">
        <p className="title">{props.title}</p>
        <p className="dates">{props.dates}</p>
        {descArray.map((x) => (
          <p className="desc">{x}</p>
        ))}
      </div>
    </div>
  );
};

export default Accomp;

/*
<p className="description">
          {descArray.map(x => x)}
        </p>
*/
