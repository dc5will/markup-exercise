import React from "react";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import HotelList from "../HotelList/HotelList";

import "./HotelPage.css";

export default function HotelPage() {

  return (
    <>
      {/* navbar section for back button */}
      <nav className="navbar-container">
        <Navbar />
      </nav>
      <div className="hotel-page-container">
        {/* left side hotel list */}
        <aside className="hotel-list-container">
          <HotelList/>
        </aside>

        {/* main content right side */}
        <main className="hotel-page-content">
          <header className="hotel-page-header-container">
            <Header />
          </header>
        </main>
      </div>
    </>
  );
}
