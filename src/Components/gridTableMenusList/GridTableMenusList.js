import React, { useState } from "react";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import RestaurantOutlinedIcon from "@mui/icons-material/RestaurantOutlined";
import PermContactCalendarOutlinedIcon from "@mui/icons-material/PermContactCalendarOutlined";
import { IconButton } from "@mui/material";

import "./GridTableMenusList.scss";
const GridTableMenusList = () => {
  const [active, setActive] = useState(2);
  const activeButton = (event,number)=>{
   setActive(+number)
  }
  return (
    <div className="gridTableMenusList__container">
      <div className={`gridTableMenusList__calendar ${active===1 && "menuList_active"}`}>
        <IconButton onClick={(e)=>activeButton(e,1)} >
          <EventAvailableIcon />
        </IconButton>
      </div>
      <div  className={`gridTableMenusList__fork ${active===2 && "menuList_active"}`} >
        <IconButton onClick={(e)=>activeButton(e,2)} >
          <RestaurantOutlinedIcon />
        </IconButton>
      </div>
      <div  className={`gridTableMenusList__contact ${active===3 && "menuList_active"}`}>
        <IconButton onClick={(e)=>activeButton(e,3)} >
          <PermContactCalendarOutlinedIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default GridTableMenusList;
