import React, { useState, useEffect } from "react";
import HotelApiService from "../../services/hotel-api-service";
import "./Details.css";

export default function Details() {
  const [venetianDetails, setVenetianDetails] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    HotelApiService.getVenetianInfo().then(data => {
      let newDetails = [];
      // console.log('data.details', data.details);
      data.details.forEach(detail => {
        newDetails.push(detail);
      });
      setVenetianDetails(newDetails);
      setLoading(false);
    });
  }, [loading]);

  // console.log("venetianDetails", venetianDetails[0]);
  console.log("room details", venetianDetails);
  // console.log(Object.values(roomDetails))

  // map out values from hotel details
  const roomDetails = venetianDetails.map((data, index) => {
    return (
      <div key={index}>
        <strong>{data.label}:</strong>
        <p>{data.value}</p>
      </div>
    );
  });

  // console.log("roomDetails", roomDetails);

  return (
    <div className="details-container">
      <div>{roomDetails}</div>
    </div>
  );
}
