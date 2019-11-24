import React from "react";
import "./Header.css";
import Venetian from "../../assets/images/venetian.jpg";
import HotelInfo from "../HotelInfo/HotelInfo";

export default function Header(props) {
  return (
    <section className="header-container">
      <div className="header-image-container">
        <img
          src={Venetian}
          className="header__hotel-image"
          alt="venetian_image"
        />
      </div>
      <div className="header__hotel-info">
        <HotelInfo />
      </div>
    </section>
  );
}
