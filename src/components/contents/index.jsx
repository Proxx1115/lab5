import React from "react";
import { News } from "../news/index";
import Tabs from "../Tabs";
import "./style.css";
const Contents = (props) => {
  let arr1 = [];
  let arr2 = [];
  let i;

  for (i = 0; i < props.prop.length - 5; i++) {
    arr1.push(props.prop[i]);
  }
  for (i; i < props.prop.length; i++) {
    arr2.push(props.prop[i]);
  }
  return (
    <div>
      <div className="main-content1">
        {arr1.map((el, ind) => (
          <News prop={el} index={ind} />
        ))}
      </div>
      <Tabs />
      <div className="main-content2">
        {arr2.map((el, ind) => (
          <News prop={el} index={ind} />
        ))}
      </div>
    </div>
  );
};
export default Contents;
