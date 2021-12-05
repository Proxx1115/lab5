import React from "react";
import Menu from "../menu";
import "./style.css";
import GetUnique from "../getUnique";

const Header = (props) => {
  let types = props.prop.map((el) => el.type);
  types = GetUnique(types);
  return (
    <div>
      <div className="header">
        {types.map((el, ind) => (
          <Menu prop={el} index={ind} tpe="simple" />
        ))}
      </div>
    </div>
  );
};
export default Header;
