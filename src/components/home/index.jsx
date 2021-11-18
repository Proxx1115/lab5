import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
const Home = () => {
  return (
    <div className="lg">
      <Link to="/">
        <img
          className="logo"
          src="https://www.yolo.mn/stat/app/img/logoOrg.png"
          alt=""
        />
      </Link>
      <p className="logo-text">Өсвөр үе, залууст ...</p>
    </div>
  );
};
export default Home;
