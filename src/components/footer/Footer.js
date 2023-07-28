import React from "react";
import logo from "../../images/logo-white.svg";
import FooterMenu from "./FooterMenu";
import "./footer.css";
import { socialdata } from "./socialData";
import RequestBtn from "../buttons/RequestBtn";
let dataImages = socialdata.map(function (element) {
  return <img key={element.id} src={element.image} alt="" />;
});

export default function Footer() {
  return (
    <footer>
      <div className="section-footer container-fluid">
        <div className="container">
          <div className="footer-main">
            <div className="row">
              <div className="col-12 col-sm-3 col-md-3">
                <img className="footer-logo" src={logo} alt="logo" />
                <div className="social">
                  <a href="/">{dataImages}</a>
                </div>
              </div>
              <div className="col-12 col-sm-4 col-md-4">
                <FooterMenu />
              </div>
              <div className="col-12 col-sm-5 col-md-5">
                <div className="footerBtnAndReserved">
                  <div className="footerReqBtn">
                    <RequestBtn />
                  </div>
                  <p
                    className="Allreserved"
                    style={{ color: "#C0C0C0", fontSize: "12px" }}
                  >
                    &copy; Easybank. All Rights Reserved
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
