import React from "react";
import "./cardAb.css";

const CardAb = (props) => {
  return (
    <div className="card__container">
      <img src={props.img}></img>
      <h1>{props.name}</h1>
      <p>{props.decs}</p>
    </div>
  );
};

export default CardAb;
