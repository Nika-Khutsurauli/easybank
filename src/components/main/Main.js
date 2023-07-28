import React from "react";
import SectionG from "../section/SectionG";
import SectionChoose from "../sectionChoose/SectionChoose";
import SectionArticles from "../sectionA/SectionArticles";
import "./main.css";
export default function Main() {
  return (
    <main className="main">
      <SectionG />
      <SectionChoose />
      <SectionArticles />
    </main>
  );
}
