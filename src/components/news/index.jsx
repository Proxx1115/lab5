import React from "react";
import "./style.css";
export const News = (props) => {
  return (
    <div className="news">
      <img src={props.prop.img} alt="zurag" />
      <h2 className="text">
        <div className="type">{props.prop.type}</div>
        <br />
        <div className="title">{props.prop.name}</div>
      </h2>
    </div>
  );
};
