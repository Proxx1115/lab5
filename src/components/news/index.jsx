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
          <div className="text-cont">
            <div className="title">{props.prop.name}</div>
            <div className="type">{props.prop.type}</div>
            <div className="more-news">
              <div className="insideMoreNews">{props.prop.more}</div>
            </div>
            <div className="news-footer">
              <div className="news-more">
                <img
                  className="heart"
                  src="https://www.yolo.mn/stat/app/img/redheart.png"
                  alt=""
                />
                <div className="number">217</div>
                <img
                  className="eye"
                  src="https://www.yolo.mn/stat/app/img/eye.png"
                  alt=""
                />
                <div className="number">4059</div>
              </div>
              <div className="when">
                <p>ӨЧИГДӨР</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
