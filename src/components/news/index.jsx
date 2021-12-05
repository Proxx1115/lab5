import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
let n = 0;
export const News = (props) => {
  let link = `/${props.prop.type}/${props.prop.id}`;
  return (
    <Link to={link}>
      <div className={`news news${(n += 1)}`}>
        <img className="image" src={props.prop.img} alt="zurag" />
        <div className="hoverInfo">
          <i class="fab fa-facebook"></i>
          <i class="fab fa-twitter"></i>
          <i class="fab fa-instagram"></i>
        </div>

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
              <div className="number">{props.prop.like}</div>
              <img
                className="eye"
                src="https://www.yolo.mn/stat/app/img/eye.png"
                alt=""
              />
              <div className="number">{props.prop.views}</div>
            </div>
            <div className="when">
              <p>ӨЧИГДӨР</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
