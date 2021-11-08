import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
const Menu = (props) => {
  return (
    <div>
      <div className="menu">
        <Link to="/category">
          <div>{props.prop}</div>
        </Link>
      </div>
    </div>
  );
};
export default Menu;
