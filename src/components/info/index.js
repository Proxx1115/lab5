import React from "react";
import "./style.css";
const Info = (props) => {
  return (
    <div className="info-cont">
      <div className="zurag">
        <img src={props.img} />
      </div>
      <div className="text">
        <div className="info-type">{props.type}</div>
        <div className="info-name">{props.name}</div>
        <div className="info">{props.info}</div>
      </div>
    </div>
  );
};
export default Info;
