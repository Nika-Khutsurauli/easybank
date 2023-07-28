import React from "react";
import SectionChooseHead from "./SectionChooseHead";
import { data } from "./data";
import "./sectionChoose.css";

let datas = data.map(function (element) {
  return (
    <div className="ChooseContent" key={element.id}>
      <img className="image" src={element.image} alt={element.image} />
      <h2 className="title">{element.title}</h2>
      <p className="desciption">{element.description}</p>
    </div>
  );
});
function SectionChoose() {
  return (
    <section>
      <div className="section-Choose container-fluid">
        <div className="container">
          <SectionChooseHead />
          <div className="mainC">{datas}</div>
        </div>
      </div>
    </section>
  );
}

export default SectionChoose;
