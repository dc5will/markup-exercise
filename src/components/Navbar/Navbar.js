import React from "react";
import "./Navbar.css";
import Icon from "../../setup-icons";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <Icon icon="left" className="left-icon" />
      <div className="back-container">
        <label className="navbar-back-button">
          <p>SEE ALL LAS VEGAS HOTELS</p>
        </label>
      </div>
    </div>
  );
}
