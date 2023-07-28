import RequestBtn from "../buttons/RequestBtn";
import imgLogo from "../../images/logo.svg";
import openBtn from "../../images/icon-hamburger.svg";
import closeBtn from "../../images/icon-close.svg";
import React, { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  /// burger menu Change ///
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="header-container container-fluid bg-white p-0">
      <div className="container">
        <header className="header">
          <nav className="navbar navbar-expand-md">
            <a className="navbar-brand text-info font-weight-bolder" href="/">
              <img src={imgLogo} alt="Logo" />
            </a>
            <button
              className="custom-toggler navbar-toggler d-xs-block d-sm-block d-md-none border-0 shadow-none"
              type="button"
              data-toggle="collapse"
              data-target="#navbarsExample09"
              aria-controls="navbarsExample09"
              aria-expanded={!isNavCollapsed ? true : false}
              aria-label="Toggle navigation"
              onClick={handleNavCollapse}
            >
              {!isOpen ? (
                <img
                  src={openBtn}
                  alt="openbtn"
                  onClick={() => setIsOpen(!isOpen)}
                />
              ) : (
                <img
                  src={closeBtn}
                  alt="openbtn"
                  onClick={() => setIsOpen(!isOpen)}
                />
              )}
            </button>
            <div
              className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
              id="navbarsExample09"
            >
              <a className="nav-link text-secondary" href="/contact">
                <span>Home</span>
              </a>
              <a className="nav-link text-secondary" href="/login">
                <span>About</span>
              </a>
              <a className="nav-link text-secondary" href="/login">
                <span>Contact</span>
              </a>
              <a className="nav-link text-secondary" href="/login">
                <span>Blog</span>
              </a>
              <a className="nav-link text-secondary" href="/login">
                <span>Careers</span>
              </a>
            </div>
            <div className="d-none d-sm-block d-md-block">
              <RequestBtn />
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
