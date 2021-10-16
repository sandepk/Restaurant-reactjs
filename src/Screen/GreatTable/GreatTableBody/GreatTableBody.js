import React from "react";
import './GreatTableBody.scss'
import GreatTableBodyHeader from "./GreatTableBodyHeader/GreatTableBodyHeader";
import GreatTableBodyContents from "./GreatTableBodyContents/GreatTableBodyContents";
import GreatTableBilling from "../GreatTableBilling/GreatTableBilling";
const GreatTableBody = () => {
  return (
    <div className="greatTableBody__container">
      <div className="greatTableBody__header"><GreatTableBodyHeader /></div>
      <div className="greatTableBody__contents"><GreatTableBodyContents /></div>
      <div className="greatTableBody__billing"><GreatTableBilling /></div>
    </div>
  );
};

export default GreatTableBody;
