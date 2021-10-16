import React from "react";
import "./GreatTableBodyContents.scss";
import ButtonGroup from "../../../../Components/UI/ButtonGroup/ButtonGroup";
import Drinks from "../../../../Components/BevaragesPage/Drinks/Drinks";
const GreatTableBodyContents = (props) => {
  return (
    <div className="greatTableBodyContents__container">
      <div className="greatTableBodyContents__beverages">
        <div className="greatTableBodyContents__tableNumber">
          Table{" "}
          <span className="greatTableBodyContents__tableNumberData">5 -Mrs.Einstein</span>
        </div>
          <ButtonGroup />
      </div>
      <div className="greatTableBodyContent__items">
          <Drinks />
      </div>
    </div>
  );
};

export default GreatTableBodyContents;
