import React from "react";
import Menu from "../menu";
import "./style.css";
import GetUnique from "../getUnique";

const Header = (props) => {
  let types = props.prop.map((el) => el.type);
  types = GetUnique(types);
  return (
    <div className="header">
      {types.map((el) => (
        <Menu prop={el} />
      ))}
      <i class="fas fa-search search"></i>
      <i class="fas fa-sign-out-alt log-out"></i>
    </div>
  );
};
export default Header;
