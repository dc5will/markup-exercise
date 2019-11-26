import React, { useState, useEffect } from "react";
import HotelApiService from "../../services/hotel-api-service";
import useCollapse from "react-collapsed";
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

  const {
    getCollapseProps: outerCollapseProps,
    getToggleProps: outerToggleProps,
    isOpen: outerOpen
  } = useCollapse({
    defaultOpen: true
  });
  const {
    getCollapseProps: innerCollapseProps,
    getToggleProps: innerToggleProps,
    isOpen: innerOpen
  } = useCollapse();

  // console.log('venetianDescription', venetianDescription)

  return (
    <div className="description-container">
      <React.Fragment>
        {/* <button {...outerToggleProps({ style: { marginBottom: "1em" } })}>
          {outerOpen ? "Close" : "Expand"}
        </button> */}
        <section
          className="hotel-description-collapsed"
          {...outerCollapseProps()}
        >
          <p className="hotel-description">{venetianDescription}</p>

          {!innerOpen && (
            <button {...innerToggleProps()}>VIEW MORE DETAILS</button>
          )}
          <p {...innerCollapseProps()}>{venetianDescription}</p>
          {innerOpen && (
            <button {...innerToggleProps({ style: { display: "block" } })}>
              Click to collapse
            </button>
          )}
        </section>
      </React.Fragment>

      {/* <div className="hotel-description-collapsed">
        <p className="hotel-description">{venetianDescription}</p>
      </div> */}
      {/* <div className="hotel-description-full">
        <p className="hotel-description">{venetianDescription}</p>
      </div> */}
    </div>
  );
}
