import React from "react";
import "./GreatTableBodyHeader.scss";
import SearchIcon from '@mui/icons-material/Search';
const GreatTableBodyHeader = (props) => {
  return (
    <div className="greatTableBodyHeader__container">
      <div className="greatTableBodyHeader__leftSidebar">
        </div>
        
      <div className="greatTableBodyHeader__heading">
        <div className="greatTableBodyHeader__headingHeader">
          The Great Table
        </div>
        <div className="greatTableBodyHeader__headingDay">
            Today
        </div>
      </div>
      <div className="greatTableBodyHeader__search">
          <SearchIcon />
    </div>
    </div>
  );
};

export default GreatTableBodyHeader;
