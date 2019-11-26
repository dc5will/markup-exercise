import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <svg className="icons" width="22" height="22" viewBox="0 0 1024 1024">
        <path
          glyph-name="left"
          horiz-adv-x="732"
          d="M88 484.57q0 14.856 10.856 25.714l424 424q10.856 10.858 25.714 10.858t25.714-10.858l94.856-94.856q10.856-10.856 10.856-25.714t-10.856-25.714l-303.428-303.428 303.428-303.428q10.856-10.856 10.856-25.714t-10.856-25.714l-94.856-94.856q-10.856-10.856-25.714-10.856t-25.714 10.856l-424 424q-10.856 10.856-10.856 25.714z"
        ></path>
      </svg>
      <div className="navbar-back-button">
        <p>SEE ALL LAS VEGAS HOTELS</p>
      </div>
    </div>
  );
}
