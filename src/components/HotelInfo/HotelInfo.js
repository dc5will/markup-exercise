import React, { useState, useEffect } from "react";
import HotelApiService from "../../services/hotel-api-service";
import "./HotelInfo.css";

export default function HotelInfo(props) {
  const [venetian, setVenetian] = useState([]);
  const [loading, setLoading] = useState(false);
  const [venetianLocation, setVenetianLocation] = useState({});
  // const [hotelName, setHotelName] = useState('');

  useEffect(() => {
    HotelApiService.getVenetianInfo().then(venetian => {
      setVenetian(venetian);
      setLoading(false);
    });
    HotelApiService.getVenetianInfo().then(venetian => {
      setVenetianLocation(venetian.location);
      setLoading(false);
    });
  }, [loading]);

  console.log("venetian location", venetianLocation.areaName);
  console.log("venetian data", venetian.name);
  // console.log("venetian location", venetian.location);
  // console.log("venetian img", venetian.details);

  return (
    <div className="header-info-container">
      <div className="hotel-name-container left-side">
        <div className="hotel-name">{venetian.name}</div>
        <div className="second-row-info">
          <p className="hotel-area-name">{venetianLocation.areaName}</p>
          <p className="hotel-phone-number">{venetian.phoneNumber}</p>
          <p className="best-price-guarantee">Best Price Guarantee</p>
        </div>
      </div>

      <div className="right-side">
        <div className="hotel-price">${venetian.price}</div>
        HOTEL ROOMS FROM
      </div>
    </div>
  );
}
