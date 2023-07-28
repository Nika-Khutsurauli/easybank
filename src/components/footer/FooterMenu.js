import React from "react";

export default function FooterMenu() {
  return (
    <ul
      style={{ fontSize: "12px", color: "#C0C0C0", lineHeight: "25px" }}
      className="FooterMenu list-unstyled"
    >
      <div className="d-flex flex-column align-items-center">
        <li>About Us</li>
        <li>Contact</li>
        <li>Blog</li>
      </div>
      <div className="d-flex flex-column align-items-center">
        <li>Careers</li>
        <li>Support</li>
        <li>Privacy Policy</li>
      </div>
    </ul>
  );
}
