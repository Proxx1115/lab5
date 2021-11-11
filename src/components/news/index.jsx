import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
export const News = (props) => {
  let link = `/${props.prop.type}/${props.prop.id}`;
  return (
    <div className="news-cont">
      <Link to={link}>
        <div className="news">
          <img className="image" src={props.prop.img} alt="zurag" />
          <h2 className="text">
            <div className="type">{props.prop.type}</div>
            <br />
            <div className="title">{props.prop.name}</div>
          </h2>
        </div>
      </Link>
    </div>
  );
};
