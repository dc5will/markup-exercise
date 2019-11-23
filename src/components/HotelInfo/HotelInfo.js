import React, { useState, useEffect } from "react";
import HotelApiService from '../../services/hotel-api-service';
import "./HotelInfo";

export default function HotelInfo() {
  const [venetian, setVenetian] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    HotelApiService.getVenetianInfo().then(venetian => {
      setVenetian(venetian);
      setLoading(false);
    });
  }, [loading]);

  console.log("venetian data", venetian); 
  console.log("venetian location", venetian.location); 
  console.log('venetian img', venetian.details)

  return (
    <div>
      <h4>{venetian.name}</h4>
      <h3>${venetian.price}</h3>
      <div>{venetian.phoneNumber}</div>
    </div>
  );
}
