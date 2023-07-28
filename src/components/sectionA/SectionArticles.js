import React from "react";
import { datas } from "./datas";
import "./sectionArticles.css";
let data = datas.map(function (element) {
  return (
    <div key={element.id} className="ArticlesContainer">
      <img className="imageArticles" src={element.image} alt="" />
      <p className="authorArticles">{element.author}</p>
      <h3 className="titleArticles">{element.title}</h3>
      <p className="descriptionArticles">{element.description}</p>
    </div>
  );
});
export default function SectionArticles() {
  return <div className="sectionArticle">{data}</div>;
}
