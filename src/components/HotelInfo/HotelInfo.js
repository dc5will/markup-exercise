import React, { useState, useEffect } from "react";
import HotelApiService from "../../services/hotel-api-service";
import "./HotelInfo.css";
// import "../../assets/fonts/icons.ttf";
// import "../../assets/fonts/icons.svg";

export default function HotelInfo(props) {
  const [venetian, setVenetian] = useState([]);
  const [loading, setLoading] = useState(false);
  const [venetianLocation, setVenetianLocation] = useState({});


  useEffect(() => {
    HotelApiService.getVenetianInfo().then(venetian => {
      setVenetian(venetian);
      setVenetianLocation(venetian.location);
      setLoading(false);
    });
  }, [loading]);

  console.log("venetian location", venetianLocation.areaName);
  console.log("venetian data", venetian.name);
  // console.log("venetian location", venetian.location);
  // console.log("venetian img", venetian.details);

  return (
    <div className="header-info-container">
      <div className="hotel-name-container left-side">
        <div className="hotel-name">
          {venetian.name}
          <svg className="icons" width="22" height="22" viewBox="0 0 1024 1024">
            <path
              glyph-name="star"
              horiz-adv-x="952"
              d="M0 590.286q0 21.144 32 26.286l286.858 41.714 128.57 260q10.856 23.428 28 23.428t28-23.428l128.572-260 286.856-41.714q32-5.144 32-26.286 0-12.572-14.856-27.428l-207.428-202.286 49.144-285.714q0.572-4 0.572-11.428 0-12-6-20.286t-17.428-8.286q-10.856 0-22.856 6.856l-256.572 134.856-256.572-134.856q-12.57-6.856-22.856-6.856-12 0-18 8.286t-6 20.286q0 3.428 1.144 11.428l49.144 285.714-208 202.286q-14.286 15.428-14.286 27.428z"
            ></path>
          </svg>
        </div>
        <div className="second-row-info">
          <p className="hotel-area-name">
            <svg
              className="icons"
              width="22"
              height="22"
              viewBox="0 0 1024 1024"
            >
              <path
                glyph-name="mark"
                horiz-adv-x="512"
                d="M256 960c-141.376 0-256-114.624-256-256s256-768 256-768 256 626.624 256 768-114.624 256-256 256zM256 576c-70.688 0-128 57.312-128 128s57.312 128 128 128 128-57.312 128-128-57.312-128-128-128z"
              ></path>
            </svg>
            {venetianLocation.areaName}
          </p>
          <p className="hotel-phone-number">
            {" "}
            <svg
              className="icons"
              width="22"
              height="22"
              viewBox="0 0 1024 1024"
            >
              <path
                glyph-name="phone"
                horiz-adv-x="806"
                d="M0 693.142q0 52.572 29.144 106.286 32 57.714 60.57 69.714 14.286 6.286 39.144 12t40.286 5.714q8 0 12-1.714 10.286-3.428 30.286-43.428 6.286-10.856 17.144-30.856t20-36.286 17.714-30.57q1.714-2.286 10-14.286t12.286-20.286 4-16.286q0-11.428-16.286-28.572t-35.43-31.428-35.43-30.286-16.286-26.286q0-5.144 2.856-12.856t4.856-11.714 8-13.714 6.57-10.856q43.43-78.286 99.43-134.286t134.286-99.428q1.142-0.572 10.858-6.572t13.714-8 11.714-4.856 12.856-2.856q10.286 0 26.286 16.286t30.286 35.428 31.428 35.428 28.572 16.286q8 0 16.286-4t20.286-12.286 14.286-10q14.286-8.572 30.572-17.714t36.286-20 30.856-17.144q40-20 43.428-30.286 1.714-4 1.714-12 0-15.428-5.714-40.286t-12-39.144q-12-28.572-69.714-60.572-53.714-29.144-106.286-29.144-15.428 0-30 2t-32.856 7.144-27.144 8.286-31.714 11.714-28 10.286q-56 20-100 47.428-73.142 45.144-151.144 123.144t-123.144 151.144q-27.43 44-47.43 100-1.714 5.142-10.286 28t-11.714 31.714-8.286 27.144-7.142 32.856-2 30z"
              ></path>
            </svg>
            {venetian.phoneNumber}
          </p>
          <p className="best-price-guarantee">
            <svg
              className="icons"
              width="22"
              height="22"
              viewBox="0 0 1024 1024"
            >
              <path
                glyph-name="like"
                horiz-adv-x="952"
                d="M0 118.856v365.714q0 14.858 10.856 25.714t25.714 10.856h164.57q14.856 0 25.714-10.856t10.856-25.714v-365.714q0-14.856-10.856-25.714t-25.714-10.856h-164.57q-14.856 0-25.714 10.856t-10.856 25.714zM73.144 192q0-15.428 10.57-26t26-10.572q14.856 0 25.714 10.572t10.856 26q0 14.856-10.856 25.714t-25.714 10.856q-15.43 0-26-10.856t-10.57-25.714zM274.286 118.856v366.286q0 14.286 10.286 24.858t24.572 11.714q13.714 1.144 43.428 33.714t57.714 69.144q38.858 49.714 57.714 68.572 10.286 10.286 17.714 27.428t10 27.714 7.714 34.57q4 22.286 7.142 34.856t11.142 29.714 19.428 28.572q10.856 10.856 25.714 10.856 26.286 0 47.144-6t34.286-14.856 22.856-23.144 13.714-25.714 6.856-28.572 2.856-25.714 0.286-22.286q0-21.714-5.428-43.428t-10.856-34.286-15.714-32q-1.714-3.428-5.714-10.286t-6.286-12.572-4.572-13.714h158.286q44.572 0 77.144-32.57t32.572-77.144q0-49.144-31.428-85.144 8.572-25.144 8.572-43.428 1.714-43.428-24.572-78.286 9.714-32 0-66.856-8.572-32.572-30.856-53.714 5.144-64-28-103.428-36.572-43.428-112.572-44.572h-73.714q-37.714 0-82.286 8.856t-69.428 16.572-68.856 22.572q-70.286 24.572-90.286 25.144-14.858 0.572-25.714 11.144t-10.856 25.428z"
              ></path>
            </svg>
            Best Price Guarantee
          </p>
        </div>
      </div>

      <div className="right-side">
        <div className="hotel-price">${venetian.price}</div>
        HOTEL ROOMS FROM
      </div>
    </div>
  );
}
