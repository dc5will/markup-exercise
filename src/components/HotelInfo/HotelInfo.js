import React, { useState, useEffect, useContext } from "react";
import HotelApiService from "../../services/hotel-api-service";
import Description from "../Description/Description";
import Details from "../Details/Details";
import Location from "../Location/Location";
import Tabs from "../Tabs/Tabs";
import Icon from "../../setup-icons";
import HotelContext from '../../contexts/HotelContext';
import "./HotelInfo.css";

export default function HotelInfo(props) {
  const [venetian, setVenetian] = useState([]);
  const [hotelRating, setHotelRating] = useState("");
  const [venetianLocation, setVenetianLocation] = useState({});
  const [loading, setLoading] = useState(true);
  const context = useContext(HotelContext);

  useEffect(() => {
    HotelApiService.getVenetianInfo().then(venetian => {
      setVenetian(venetian);
      setVenetianLocation(venetian.location);
      setHotelRating(venetian.starRating);
      setLoading(false);
    });
  }, [loading]);

  // takes hotel rating from api, rounds up, and pushes out stars
  function generateStarRating() {
    let stars = [];
    let hotelRatingRoundedUp = Math.ceil(Number(hotelRating));
    for (let i = 0; i < hotelRatingRoundedUp; i++) {
      stars.push(<Icon key={i} icon="star" />);
    }
    return stars;
  }

  console.log('context=', context)

  return (
    <>
      <div className="header-info-container">

        <div className="hotel-name-container left-side">
          <div className="hotel-name">
            <h1 className="hotel-title">{venetian.name}</h1>
            <div className="hotel-ratings-container">
              {generateStarRating()}
            </div>
          </div>

          <div className="second-row-info">
            <label onClick={() => context.onClickTabItem('LOCATION')} className="hotel-area-name">
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
