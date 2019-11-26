import React, { useState, useEffect } from "react";
import HotelApiService from "../../services/hotel-api-service";
import "./HotelInfo.css";
import Description from "../Description/Description";
import Details from "../Details/Details";
import Location from "../Location/Location";
import Tabs from "../Tabs/Tabs";
import Icon from "../../setup-icons";

export default function HotelInfo(props) {
  const [venetian, setVenetian] = useState([]);
  const [hotelRating, setHotelRating] = useState('')
  const [loading, setLoading] = useState(false);
  const [venetianLocation, setVenetianLocation] = useState({});

  useEffect(() => {
    HotelApiService.getVenetianInfo().then(venetian => {
      setVenetian(venetian);
      setVenetianLocation(venetian.location);
      setHotelRating(venetian.starRating)
      setLoading(false);
    });
  }, [loading]);

  console.log('venetian.starRating', venetian.starRating)
  
  // TODO: is there a cleaner implementation?
  // takes hotel rating from api, rounds up, and pushes out stars
  function generateStarRating() {
    let stars = [];
    let hotelRatingRounded = Math.ceil(parseInt(hotelRating));
    for (let i = 0; i < hotelRatingRounded; i++) {
      stars.push(<Icon key={i} icon="star" />)
    }
    return stars;
  }

  return (
    <>
      <div className="header-info-container">
        <div className="hotel-name-container left-side">
          <div className="hotel-name">
            {venetian.name}
            {generateStarRating()}
          </div>
          <div className="second-row-info">
            <label className="hotel-area-name">
              <Icon icon="mark" />
              {venetianLocation.areaName}
            </label>
            <label className="hotel-phone-number">
              <Icon icon="phone" />
              {venetian.phoneNumber}
            </label>
            <label className="best-price-guarantee">
              <Icon icon="like" />
              Best Price Guarantee
            </label>
          </div>
        </div>

        <div className="right-side">
          <div className="hotel-price">${venetian.price}</div>
          HOTEL ROOMS FROM
        </div>
      </div>
      <div className="tab-container">
        <Tabs>
          <div label="DESCRIPTION">
            <Description />
          </div>
          <div label="DETAILS">
            {" "}
            <Details />
          </div>
          <div label="LOCATION">
            <Location />
          </div>
        </Tabs>
      </div>
    </>
  );
}
