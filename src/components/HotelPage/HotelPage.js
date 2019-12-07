import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import HotelList from "../HotelList/HotelList";
import HotelApiService from '../../services/hotel-api-service';

import "./HotelPage.css";

export default function HotelPage() {
  const [venetian, setVenetian] = useState([]);
  const [hotelRating, setHotelRating] = useState("");
  const [venetianLocation, setVenetianLocation] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    HotelApiService.getVenetianInfo().then(venetian => {
      setVenetian(venetian);
      setVenetianLocation(venetian.location);
      setHotelRating(venetian.starRating);
      setLoading(false);
    });
  }, [loading]);

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
            <Header venetian={venetian} hotelRating={hotelRating} venetianLocation={venetianLocation}/>
          </header>
        </main>
      </div>
    </>
  );
}
