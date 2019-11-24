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

  // remove duplicates from hotel list
  const uniqueHotelList = Array.from(new Set(hotels.map(a => a.name))).map(name => {
    return hotels.find(a => a.name === name);
  })
  // console.log('uniqueHotelList', uniqueHotelList)
  
  // sort uniqueHotelList
  const sortedHotelList = uniqueHotelList.sort((a, b) => (a.name > b.name) ? 1 : -1)
  console.log('sortedHotelList', sortedHotelList)

  // console.log('hotel list', hotels)
  // const removeDuplicates = Array.from(new Set(hotels));
  // console.log('remove duplicates', removeDuplicates)
  
  return (
    <div className="hotel-list_container">
      {sortedHotelList.map((hotel, index) => (
        <div key={index}>
          <div>
            <p>{hotel.name} - ${hotel.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
