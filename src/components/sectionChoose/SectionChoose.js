import React from "react";
import { data } from "./data";
import "./sectionChoose.css";

let datas = data.map(function (element) {
  return (
    <div className="ChooseContent col-12 col-sm-3 col-md-3" key={element.id}>
      <img className="image" src={element.image} alt="" />
      <h2 className="title">{element.title}</h2>
      <p className="desciption">{element.description}</p>
    </div>
  );
});
function SectionChoose() {
  return <div className="mainC">{datas}</div>;
}

export default SectionChoose;
