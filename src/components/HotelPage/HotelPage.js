import React from "react";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import HotelList from "../HotelList/HotelList";
import Description from "../Description/Description";
import Details from "../Details/Details";
import Location from "../Location/Location";
import Tabs from "../Tabs/Tabs";
import "./HotelPage.css";

export default function HotelPage() {
  return (
    <>
      <nav className="navbar-container">
        <Navbar />
      </nav>
      <header className="hotel-page-header-container">
        <Header />
      </header>
      <div className="hotel-page-container">
        <aside className="hotel-page-hotel-list-container">
          <HotelList />
        </aside>

        <section className="hotel-page-main-container">
          {/* Put tabs here */}
          {/* tab section */}
          <div className="tab-container">
            <Tabs>
              <div label="DESCRIPTION">DESCRIPTION PLACEHOLDER</div>
              <div label="DETAILS">DETAILS PLACEHOLDER</div>
              <div label="LOCATION">LOCATION PLACEHOLDER</div>
            </Tabs>
          </div>
          <Description />
          <Details />
          <Location />
        </section>
      </div>
    </>
  );
}
