import React from "react";
import "./Header.css";
import HotelInfo from "../HotelInfo/HotelInfo";

export default function Header() {

  return (
    <section className="header-container">
      <div className="header__hotel-info">
        <HotelInfo />
      </div>
    </section>
  );
}
