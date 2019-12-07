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
      setCollapsedDescription(collapsedDescriptionView(newVenetianDetails));
      setRemainingDescription(remainingDescriptionView(newVenetianDetails));
      setLoading(false);
    });
  }, [loading]);

  // Only show first 2 paragraphs for collapsed view
  const collapsedDescriptionView = string => {
    let paragraphsArray = string.split(/\r\n\r\n/g);
    let result = [];
    for (let i = 0; i < 2; i++) {
      result.push(paragraphsArray[i]);
    }
    return result;
  };

  // takes data from collapsedDescription in state and maps it out
  const collapsedDescriptionViewRender = () => {
    return collapsedDescription.map((data, index) => (
      <div key={index}>
        <p>{data}</p>
      </div>
    ));
  };

  // Show the rest of the view not including the first 2 paragraphs
  const remainingDescriptionView = string => {
    let paragraphsArray = string.split(/\r\n\r\n/g);
    let result = [];
    for (let i = 2; i < paragraphsArray.length; i++) {
      result.push(paragraphsArray[i]);
    }
    return result;
  };

  // takes data from remainingDescription in state and maps it out
  // FIXME: toggling this view has small bug with formatting. Increased gap but fixes itself
  const remainingDescriptionViewRender = () => {
    return remainingDescription.map((data, index) => (
      <div key={index}>
        <p className='description-paragraphs'>{data}</p>
      </div>
    ));
  };

  const { getCollapseProps: outerCollapseProps } = useCollapse({
    defaultOpen: true,
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
          {collapsedDescriptionViewRender()}
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
        <div {...innerCollapseProps()}>{remainingDescriptionViewRender()}</div>

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
