import React from "react";
import "./cardLP.css";
// import PeopleIcon from "@material-ui/icons"
import filcoin from '../../images/filecoin.svg'
const CardLP = (props) => {
  return (
    <div className="cards">
      <div className="leftSection">
        <h1 className="title">{props.filename}</h1>
        <p className="dec">{props.description}</p>
        <div className="group">
          <label>Size :</label>
          <p>{props.carSize} MB</p>
        </div>
      </div>
      <div className="middleSection">
        <div className="group">
          <label>Price :</label>
          <h1>{props.price}</h1>
          <img src={filcoin}></img>
        </div>
      </div>
      <div className="rightSection">
        <a>Buy now</a>
      </div>
    </div>
  );
};

export default CardLP;
