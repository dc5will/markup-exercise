import React, { useState, useEffect } from "react";
import HotelApiService from "../../services/hotel-api-service";
import useCollapse from "react-collapsed";
import Icon from "../../setup-icons";
import "./Description.css";

export default function Description() {
  // const [venetianDescription, setVenetianDescription] = useState([]);
  const [collapsedDescription, setCollapsedDescription] = useState([]);
  const [remainingDescription, setRemainingDescription] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    HotelApiService.getVenetianInfo().then(data => {
      let newVenetianDetails = data ? data.description : [];
      // setVenetianDescription(newVenetianDetails);
      setCollapsedDescription(collapsedView(newVenetianDetails));
      setRemainingDescription(fullView(newVenetianDetails));
      setLoading(false);
    });
  }, [loading]);

  // console.log("venetianDescription=", venetianDescription);

  // Only show first 2 paragraphs for collapsed view
  function collapsedView(string) {
    let paragraphsArray = string.split(/\r\n\r\n/g);
    let result = [];
    for (let i = 0; i < 2; i++) {
      result.push(paragraphsArray[i]);
    }
    return result;
  }

  // Show the rest of the view not including the first 2 paragraphs
  function fullView(string) {
    let paragraphsArray = string.split(/\r\n\r\n/g);
    let result = [];
    for (let i = 2; i < paragraphsArray.length; i++) {
      result.push(paragraphsArray[i]);
    }
    return result;
  }

  const { getCollapseProps: outerCollapseProps } = useCollapse({
    defaultOpen: true
  });
  const {
    getCollapseProps: innerCollapseProps,
    getToggleProps: innerToggleProps,
    isOpen: innerOpen
  } = useCollapse();

  return (
    <div className="description-container">
      {/* Render the items for collapsed view  */}
      <section
        className="hotel-description-collapsed"
        {...outerCollapseProps()}
      >
        <div className="hotel-description">
          {collapsedDescription.map((data, index) => (
            <div key={index}>
              <p>{data}</p>
            </div>
          ))}
        </div>

        {/* Toggle label to show rest of description */}
        {!innerOpen && (
          <label {...innerToggleProps()}>
            <div className="show-full-description">
              SHOW FULL DESCRIPTION
              <Icon icon="down" />
            </div>
          </label>
        )}

        {/* Render the items to show the remaining description */}
        <div {...innerCollapseProps()}>
          {remainingDescription.map((data, index) => (
            <div key={index}>
              <p>{data}</p>
            </div>
          ))}
        </div>

        {/* Toggle label to return to collapsed view */}
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
