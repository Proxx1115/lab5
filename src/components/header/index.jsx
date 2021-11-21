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
          <Menu prop={el} index={ind} />
        ))}
        <i class="fas fa-search search"></i>
        <i class="fas fa-sign-out-alt log-out"></i>
      </div>
      <div className="mbl">
        <i class="fas fa-search srch"></i>
        <img
          class="mobile-menu"
          src="https://www.yolo.mn/stat/app/img/phoneikon.png"
          alt=""
          onClick={() => {
            props.fn();
          }}
        />
      </div>
    </div>
  );
};
export default Header;
