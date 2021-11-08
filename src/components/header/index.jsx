import React from "react";
import Menu from "../menu";
import Category from "../category/category";
import "./style.css";
function getUnique(array) {
  var uniqueArray = [];
  let i;
  for (i = 0; i < array.length; i++) {
    if (uniqueArray.indexOf(array[i]) === -1) {
      uniqueArray.push(array[i]);
    }
  }
  return uniqueArray;
}

const Header = (props) => {
  let types = props.prop.map((el) => el.type);
  types = getUnique(types);
  types.unshift("Home");
  return (
    <div className="header">
      {types.map((el) => (
        <Menu prop={el} />
      ))}
    </div>
  );
};
export default Header;
