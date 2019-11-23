import React, { useState, useEffect } from "react";
import config from "../../config";
import "./HotelInfo";

export default function HotelInfo() {
  const [venetian, setVenetian] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getVenetian().then(venetian => {
      setVenetian(venetian);
      setLoading(false);
    });
  }, [loading]);

  function getVenetian() {
    return fetch(`${config.API_ENDPOINT}/hotels/venetian`, {
      method: "GET",
      headers: {
        "content-type": "application/json"
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  }

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
