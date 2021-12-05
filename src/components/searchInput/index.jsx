import React from "react";
import "./style.css";
const SearchInput = (props) => {
  return (
    <div className="searchInpCont">
      <input
        className="searchInput"
        type="text"
        placeholder="Хайх үгээ бичнэ үү..."
        onChange={props.fn}
      />
    </div>
  );
};
export default SearchInput;
