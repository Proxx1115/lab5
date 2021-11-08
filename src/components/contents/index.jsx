import React from "react";
import { News } from "../news/index";
import "./style.css";
const Contents = (props) => {
  return (
    <div className="main-content">
      {props.prop.map((el) => (
        <News prop={el} />
      ))}
    </div>
  );
};
export default Contents;
