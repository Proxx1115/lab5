import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
const Menu = (props) => {
  let str = `/${
    props.tpe === "new"
      ? "EDUCATION"
      : props.tpe === "notsimple"
      ? "COMIC"
      : props.tpe === "notsimple1"
      ? "ENTERTAINMENT"
      : props.tpe === "notsimple2"
      ? "STRANGE"
      : props.prop
  }`;
  return (
    <div
      className={`menu ${
        props.tpe === "new"
          ? "new"
          : props.tpe === "notsimple"
          ? "notsimple"
          : props.tpe === "notsimple1"
          ? "notsimple"
          : props.tpe === "notsimple2"
          ? "notsimple"
          : "simple"
      }`}
    >
      <Link to={str}>{props.prop}</Link>
    </div>
  );
};
export default Menu;
