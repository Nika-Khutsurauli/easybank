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
  return (
    <section>
      <div className="section-article container-fluid">
        <div className="container">
          <h1 className="text-center text-sm-start text-md-start h1 py-5">
            Latest articles
          </h1>
          <div className="sectionArticle">{data}</div>
        </div>
      </div>
    </section>
  );
}
