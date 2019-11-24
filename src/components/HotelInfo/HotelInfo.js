import React, { useState, useEffect } from "react";
import HotelApiService from "../../services/hotel-api-service";
import "./HotelInfo.css";

export default function HotelInfo() {
  const [venetian, setVenetian] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [hotelName, setHotelName] = useState('');

  useEffect(() => {
    HotelApiService.getVenetianInfo().then(venetian => {
      setVenetian(venetian);
      setLoading(false);
    });
  }, [loading]);
  
  console.log("venetian data", typeof(venetian.name));
  // console.log("venetian location", venetian.location);
  // console.log("venetian img", venetian.details);

  return (
    <div className="header-info-container">
      <div className="hotel-name-container left-side">
        <h4 className='hotel-name'>{venetian.name}</h4>
      <div>{venetian.phoneNumber}</div>
      </div>

      <div className='hotel-price right-side'>
        <h4>${venetian.price}</h4>
      </div>
    </div>
  );
}
