import React, { useState, useEffect } from "react";
import HotelApiService from "../../services/hotel-api-service";
import Venetian from "../../assets/images/venetian.jpg";
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

  // remove duplicates from hotel list
  const uniqueHotelList = Array.from(new Set(hotels.map(a => a.name))).map(
    name => {
      return hotels.find(a => a.name === name);
    }
  );
  // console.log('uniqueHotelList', uniqueHotelList)

  // sort uniqueHotelList
  const sortedHotelList = uniqueHotelList.sort((a, b) =>
    a.name > b.name ? 1 : -1
  );
  console.log("sortedHotelList", sortedHotelList);

  // console.log('hotel list', hotels)
  // const removeDuplicates = Array.from(new Set(hotels));
  // console.log('remove duplicates', removeDuplicates)

  return (
    <div className="hotel-list_container">
      {/* image section */}
      <div className="header-image-container">
        <img
          src={Venetian}
          className="header__hotel-image"
          alt="venetian_image"
        />
      </div>
      {sortedHotelList.map((hotel, index) => (
        <div key={index}>
          <div className="row">
            <div className="column">
              <div className="left-column">{hotel.name}</div>
            </div>
            <div className="column">
              <div className="right-column">${hotel.price}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
