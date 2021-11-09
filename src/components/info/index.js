import React from "react";
import "./style.css";
const Info = (props) => {
  return (
    <div>
      <img src={props.img} />
      <div>{props.type}</div>
      <div>{props.name}</div>
      <div>{props.info}</div>
    </div>
  );
};
export default Info;
