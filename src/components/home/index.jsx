import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
const Home = () => {
  return (
    <Link to="/">
      <i class="fas fa-home fa-3x"></i>
    </Link>
  );
};
export default Home;