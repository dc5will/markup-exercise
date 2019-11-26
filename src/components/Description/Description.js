import React, { useState, useEffect } from "react";
import HotelApiService from "../../services/hotel-api-service";
import useCollapse from "react-collapsed";
import "./Description.css";
import Icon from "../../setup-icons";
import helpers from "../../services/helper";

export default function Description() {
  const [venetianDescription, setVenetianDescription] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    HotelApiService.getVenetianInfo().then(data => {
      setVenetianDescription(data.description);
      setLoading(false);
    });
  }, [loading]);

  const { getCollapseProps: outerCollapseProps } = useCollapse({
    defaultOpen: true
  });
  const {
    getCollapseProps: innerCollapseProps,
    getToggleProps: innerToggleProps,
    isOpen: innerOpen
  } = useCollapse();

  console.log("venetianDescription", venetianDescription);

  return (
    <div className="description-container">
      <section
        className="hotel-description-collapsed"
        {...outerCollapseProps()}
      >
        <p className="hotel-description">{helpers.venetianCollapsed}</p>

        {!innerOpen && (
          <label {...innerToggleProps()}>
            <div className="show-full-description">
              SHOW FULL DESCRIPTION
              <Icon icon="down" />
            </div>
          </label>
        )}

        <p {...innerCollapseProps()}>{helpers.venetianFull}</p>
        {innerOpen && (
          <label {...innerToggleProps()}>
            <div className="hide-full-description">
              HIDE FULL DESCRIPTION
              <Icon icon="up" />
            </div>
          </label>
        )}
      </section>
    </div>
  );
}
