import React from "react";

const Accomp = (props) => {
  let descArray = props.desc; //array of indiv. strings
  console.log(descArray);

  return (
    <div className="accomplishment">
      <img src={props.pictureName} alt="Company" className="picture" />
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
