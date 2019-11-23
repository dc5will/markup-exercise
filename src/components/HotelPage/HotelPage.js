import React from "react";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import HotelList from "../HotelList/HotelList";
import Description from "../Description/Description";
import Details from "../Details/Details";
import Location from "../Location/Location";
import "./HotelPage.css";

export default function HotelPage() {
  return (
    <div className="hotel-page-container">
      <nav className="navbar-container">
        <Navbar />
      </nav>

      <header className="hotel-page-header-container">
        <Header />
      </header>

      <aside className="hotel-page-hotel-list-container">
        <HotelList />
      </aside>

      <div className="hotel-page-main-container">
        <Description />
        <Details />
        <Location />
      </div>
      
    </div>
  );
}
