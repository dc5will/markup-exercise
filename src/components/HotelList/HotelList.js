import React, { useState, useEffect } from "react";
import config from "../../config";
import "./HotelList.css";

export default function HotelList() {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getHotelList().then(hotels => {
      let newHotels = [];
      hotels.list.forEach(hotel => {
        newHotels.push(hotel);
      });
      // console.log(newHotels);
      setHotels(newHotels);
      setLoading(false);
    });
  }, [loading]);

  function getHotelList() {
    return fetch(`${config.API_ENDPOINT}/hotels`, {
      method: "GET",
      headers: {
        "content-type": "application/json"
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  }

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