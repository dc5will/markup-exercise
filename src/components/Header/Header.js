import React from "react";
import "./Header.css";
import Venetian from "../../assets/images/venetian.jpg";

export default function Header(props) {
  return (
    <div className='header'>
      <img src={Venetian} className='header__hotel-image' alt="venetian_image" />
    </div>
  );
}
