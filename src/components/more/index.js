import React from "react";
import Info from "../info";
import "./style.css";
import { Routes, Route, HashRouter } from "react-router-dom";
const More = (props) => {
  function findLink() {
    let link = "";
    let temp = window.location.hash;
    for (let i = 2; i < temp.length; i++) link += temp[i];
    return link;
  }
  function findType() {
    let type = "";
    for (let i = 0; i < findLink().length; i++) {
      if (findLink()[i] !== "/") type += findLink()[i];
      else break;
    }
    return type;
  }
  function findID() {
    let link = findLink();
    let id = "";
    for (let i = 0; i < link.length; i++) {
      if (!isNaN(link[i])) id += link[i];
    }
    return id;
  }
  let mor = props.prop.filter((el) => {
    if (el.type === findType()) {
      if (el.id === parseInt(findID())) {
        return el;
      }
    }
  });
  return (
    <div>
      <Info
        name={mor[0].name}
        type={mor[0].type}
        info={mor[0].more}
        img={mor[0].img}
      />
    </div>
  );
};
export default More;
