import React from "react";
import Contents from "../contents";
import "./style.css";
const Category = (property) => {
  let temp = window.location.hash;
  let type = "";
  for (let i = 2; i < temp.length; i++) type += temp[i];
  let filteredNews = [];
  filteredNews = property.prop.filter((el) => {
    if (el.type === type) {
      return el;
    }
  });
  return (
    <div>
      <Contents prop={filteredNews} />
    </div>
  );
};
export default Category;
