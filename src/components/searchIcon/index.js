import React from "react";
import "./style.css";
const SearchIcon = (props) => {
  return (
    <div>
      <i onClick={props.fn} class="fas fa-search search"></i>
    </div>
  );
};
export default SearchIcon;
