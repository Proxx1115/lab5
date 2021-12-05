import React from "react";
import Contents from "../contents";
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
      {property.querry === "" ? (
        <Contents prop={filteredNews} />
      ) : (
        <Contents prop={property.filNews} />
      )}
    </div>
  );
};
export default Category;
