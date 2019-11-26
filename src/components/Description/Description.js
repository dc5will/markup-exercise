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

  const {
    getCollapseProps: outerCollapseProps
    // getToggleProps: outerToggleProps,
    // isOpen: outerOpen
  } = useCollapse({
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
      <React.Fragment>
        <section
          className="hotel-description-collapsed"
          {...outerCollapseProps()}
        >
          <p className="hotel-description">{helpers.venetianCollapsed}</p>

          {!innerOpen && (
            <label {...innerToggleProps()}>
              <div className="show-full-description">
                <Icon icon="down" />
                SHOW FULL DESCRIPTION
              </div>
            </label>
          )}
          <p {...innerCollapseProps()}>{helpers.venetianFull}</p>
          {innerOpen && (
            <label {...innerToggleProps()}>
              <div className="hide-full-description">
                <Icon icon="up" />
                HIDE FULL DESCRIPTION
              </div>
            </label>
          )}
        </section>
      </React.Fragment>
    </div>
  );
}
