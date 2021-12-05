import React from "react";
import "./style.css";

const MobileMenu = (props) => {
  return (
    <div>
      <img
        className="mbl-menu"
        src="https://www.yolo.mn/stat/app/img/phoneikon.png"
        onClick={props.fn}
      ></img>
      <a href="facebook.com">
        <i class="fas fa-sign-out-alt log-out"></i>
      </a>
    </div>
  );
};
export default MobileMenu;
