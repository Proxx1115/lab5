import React from "react";
import { useState } from "react";
import "./style.css";
import Menu from "../menu";
const Tabs = () => {
  return (
    <div className="tabs">
      <div className="speacial2">
        <p>СҮҮЛД НЭМЭГДСЭН МЭДЭЭ</p>
      </div>
      <div className="mcont">
        <Menu prop="Шинэ" tpe="new" />
        <Menu prop="Их like тай" tpe="notsimple" />
        <Menu prop="Их уншсан 30 хоногт" tpe="notsimple1" />
        <Menu prop="Их уншсан Хамгийн" tpe="notsimple2" />
      </div>
    </div>
  );
};
export default Tabs;
