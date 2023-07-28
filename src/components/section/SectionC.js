import React from "react";
import RequestBtn from "../buttons/RequestBtn";
import "./SectionC.css";
export default function SectionC() {
  return (
    <div className="ngSection container-fluid p-0">
      <section className="container p-0">
        <div className="leftSection col-12 col-sm-4 col-md-4">
          <h1 className="SgHeader">Next generation digital banking</h1>
          <p className="py-sm-3 sgDesc">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending,saving,budgeting,investing,and much more.
          </p>
          <div className="text-center">
            <RequestBtn />
          </div>
        </div>

        <div className="CoverImgs col-12 col-sm-8 col-md-8 p-0">
          <div className="bgIntro"></div>
          <div className="bgMockups"></div>
        </div>
      </section>
    </div>
  );
}
