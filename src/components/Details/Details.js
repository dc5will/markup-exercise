import React, { useState, useEffect } from "react";
import HotelApiService from "../../services/hotel-api-service";
import './Details.css'

export default function Details() {
  const [venetianDetails, setVenetianDetails] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    HotelApiService.getVenetianInfo().then(data => {
      let newDetails = [];
      // console.log('data.details', data.details);
      data.details.forEach(detail => {
        newDetails.push(detail)
      })
      setVenetianDetails(newDetails);
      setLoading(false);
    });
  }, [loading]);

  console.log('venetianDetails[0]', venetianDetails[0]);

  // TODO: figure out why i cant grab the values I want from obj
  return (
    <div className="details-container">
      <div className='number-of-rooms-container'>
        <h4>Number of rooms:</h4>
      </div>
      <div className='casino-container'>
        <h4>Casino:</h4>
      </div>
    </div>
  );
}