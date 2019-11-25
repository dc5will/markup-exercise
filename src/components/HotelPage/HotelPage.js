import React from "react";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import HotelList from "../HotelList/HotelList";
import Description from "../Description/Description";
import Details from "../Details/Details";
import Location from "../Location/Location";
import Tabs from "../Tabs/Tabs";
import "./HotelPage.css";

export default function HotelPage(props) {
  return (
    <>
        <nav className="navbar-container">
          <Navbar />
        </nav>
      <div className="hotel-page-container">
        {/* navbar section for back button */}

        {/* left side hotel list */}
        <aside className="hotel-list-container">
          <HotelList />
        </aside>

        {/* main content right side */}
        <main className="hotel-page-content">
        <header className="hotel-page-header-container">
          <Header />
        </header>
          {/* tab main */}
          <div className="tab-container">
            <Tabs>
              <div label="DESCRIPTION">
                <Description />
              </div>
              <div label="DETAILS">
                {" "}
                <Details />
              </div>
              <div label="LOCATION">
                <Location />
              </div>
            </Tabs>
          </div>
        </main>
      </div>
      </>
  );
}
