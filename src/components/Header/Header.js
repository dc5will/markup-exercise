import React, { useState } from "react";
import "./Header.css";
import Venetian from "../../assets/images/venetian.jpg";
import HotelInfo from "../HotelInfo/HotelInfo";

export default function Header(props) {
  // const [activeTab, setActiveTab] = useState("1");

  return (
    <section className="header-container">
      {/* image section */}
      <div className="header-image-container">
        <img
          src={Venetian}
          className="header__hotel-image"
          alt="venetian_image"
        />
      </div>

      {/* Info section */}
      <div className="header__hotel-info">
        <HotelInfo />
      </div>

    </section>
  );
}
