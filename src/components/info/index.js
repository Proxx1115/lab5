import React from "react";
import "./style.css";
const Info = (props) => {
  return (
    <div className="info-cont">
      <div className="text">
        <div className="info-name">{props.name}</div>
        <div className="author-cont">
          <div className="author">
            <p>
              <span>Б.Баяржаргал</span> | YOLO.MN
            </p>
            <p className="nn">2021-11-15</p>
          </div>
          <div className="link">
            <p className="thumb">👍Like 21</p>
            <p className="numb">Share</p>
          </div>
        </div>
        <div className="info">{props.info}</div>
      </div>
      <div className="zurag">
        <img src={props.img} />
      </div>
    </div>
  );
};
export default Info;
