import React, { useState, useEffect } from "react";
import HotelApiService from "../../services/hotel-api-service";
import mapVenetian from '../../assets/images/map_venetian.png';
import './Location.css'

export default function Description() {
  const [venetianLocation, setVenetianLocation] = useState("");
  const [venetianMedia, setVenetianMedia] = useState([])
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    HotelApiService.getVenetianInfo().then(data => {
      setVenetianLocation(data.location);
      setLoading(false);
    });
    HotelApiService.getVenetianInfo().then(data => {
      setVenetianMedia(data.media);
      setLoading(false);
    });
  }, [loading]);

  // console.log('venetianLocation', venetianLocation.address)
  console.log('venetianMedia', venetianMedia[1])

  return (
    <div className="Location-container">
      <h4 className='venetian-location'>
        {venetianLocation.address}, {venetianLocation.city}, {venetianLocation.state}, {venetianLocation.postalCode}
      </h4>
      <div className='map-container'>
        <img src={mapVenetian} className='map-location' alt='venetian-google-maps'/>
      </div>
    </div>
  );
}
