import React from "react";
import "./Header.css";
import Venetian from "../../assets/images/venetian.jpg";
import HotelInfo from '../HotelInfo/HotelInfo';

export default function Header(props) {
  return (
    <section className='header'>
      <img src={Venetian} className='header__hotel-image' alt="venetian_image" />
      <HotelInfo/>
    </section>
  );
}
