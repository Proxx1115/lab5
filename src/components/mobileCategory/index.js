import React from "react";
import Menu from "../menu";
import getUnique from "../getUnique";
import "./style.css";
const MobileCategory = (props) => {
  let types = props.prop.map((el) => el.type);
  types = getUnique(types);
  return (
    <div>
      <div className="m-header">
        {types.map((el) => (
          <Menu className="btm" prop={el} />
        ))}
      </div>
    </div>
  );
};
export default MobileCategory;
