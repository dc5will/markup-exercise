import React, { useState, useEffect } from "react";
import HotelApiService from '../../services/hotel-api-service';
import "./HotelList.css";

export default function HotelList() {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    HotelApiService.getHotelList().then(hotels => {
      let newHotels = [];
      hotels.list.forEach(hotel => {
        newHotels.push(hotel);
      });
      // console.log(newHotels);
      setHotels(newHotels);
      setLoading(false);
    });
  }, [loading]);

  console.log("testing", hotels);
  return (
    <div className="hotel-list_container">
      {hotels.map((hotel, index) => (
        <div key={index}>
          <div>
            <p>{hotel.name} - ${hotel.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
