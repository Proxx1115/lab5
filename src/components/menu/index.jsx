import React from "react";
import "./style.css";
const Menu = (props) => {
  return (
    <div>
      <div className="menu">
        <div>{props.prop}</div>
      </div>
    </div>
  );
};
export default Menu;
