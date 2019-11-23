import React, { useState, useEffect } from "react";
import config from "../../config";

export default function Hotels(props) {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getHotels().then(hotels => {
      let newHotels = [];
      console.log(hotels.list); // returning c
      hotels.list.forEach(hotel => {
        newHotels.push(hotel.name, hotel.price);
      });
      // console.log(newHotels);
      setHotels(newHotels);
      setLoading(false);
    })
  }, [loading])

  function getHotels() {
    return fetch(`${config.API_ENDPOINT}/hotels`, {
      method: "GET",
      headers: {
        "content-type": "application/json",

      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  }

  return (
    <div>{hotels}</div>
  )
}
