import React, { useState, useEffect } from "react";
import HotelApiService from "../../services/hotel-api-service";
import "./Description.css";

export default function Description() {
  const [venetianDescription, setVenetianDescription] = useState("");
  
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    HotelApiService.getVenetianInfo().then(data => {
      setVenetianDescription(data.description);
      setLoading(false);
    });
  }, [loading]);

  return (
    <div className="description-container">
      <div className="hotel-description-collapsed">
        <p className="hotel-description">{venetianDescription}</p>
      </div>
      {/* <div className="hotel-description-full">
        <p className="hotel-description">{venetianDescription}</p>
      </div> */}
    </div>
  );
}
