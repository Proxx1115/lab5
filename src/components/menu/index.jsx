import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
const Menu = (props) => {
  let str = `/${props.prop}`;
  return (
    <div className="menu">
      <Link to={str}>{props.prop}</Link>
    </div>
  );
};
export default Menu;
