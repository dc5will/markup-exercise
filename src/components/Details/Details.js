import React, { useState, useEffect } from "react";
import HotelApiService from "../../services/hotel-api-service";
import useCollapse from "react-collapsed";
import Icon from "../../setup-icons";
import "./Details.css";

export default function Details() {
  const [venetianDetails, setVenetianDetails] = useState([]);
  const [collapsedDetails, setCollapsedDetails] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    HotelApiService.getVenetianInfo().then(data => {
      let newDetails = [];
      data.details.forEach(detail => {
        newDetails.push(detail);
      });
      setVenetianDetails(newDetails);
      setCollapsedDetails(collapsedView(newDetails));
      setLoading(false);
    });
  }, [loading]);

  const {
    getCollapseProps: outerCollapseProps
  } = useCollapse({
    defaultOpen: true
  });
  const {
    getCollapseProps: innerCollapseProps,
    getToggleProps: innerToggleProps,
    isOpen: innerOpen
  } = useCollapse();

  // View for collapsed view
  function collapsedView(data) {
    let result = [];
    for (let i = 0; i < 2; i++) {
      result.push(data[i]);
    }
    return result;
  }

  return (
    <div className="details-container">
      <section className="hotel-details-collapsed" {...outerCollapseProps()}>
        <div className="hotel-details">
          {collapsedDetails.map((data, index) => (
            <div key={index}>
              <strong>{data.label}:</strong>
              <p>{data.value}</p>
            </div>
          ))}
        </div>

        {!innerOpen && (
          <label {...innerToggleProps()}>
            <div className="show-full-details">
              SHOW FULL DETAILS
              <Icon icon="down" />
            </div>
          </label>
        )}

        <div {...innerCollapseProps()}>
          {venetianDetails.map((data, index) => (
            <div key={index}>
              <strong>{data.label}:</strong>
              <p>{data.value}</p>
            </div>
          ))}
        </div>
        {innerOpen && (
          <label {...innerToggleProps()}>
            <div className="hide-full-details">
              HIDE FULL DETAILS
              <Icon icon="up" />
            </div>
          </label>
        )}
      </section>
    </div>
  );
}
