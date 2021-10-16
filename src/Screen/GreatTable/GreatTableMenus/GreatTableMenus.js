import React from "react";
import ChairIcon from "@mui/icons-material/Chair";
import GridTableMenusList from "../../../Components/gridTableMenusList/GridTableMenusList";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import IconButton from "@material-ui/core/IconButton";
import CustomizedTooltips from "../../../Components/UI/Tooltip/CustomizedTooltip";
import "./GreatTableMenus.scss";
const GreatTableMenus = () => {
  return (
    <div className="gridTableMenus__container">
      <div className="gridTableMenus__logo">
        <CustomizedTooltips
          title={`This Project is @copyright content of Sandeep Gupta(IITK).For More info contact +918429299481`}
        >
          <IconButton>
            <ChairIcon />
          </IconButton>
        </CustomizedTooltips>
      </div>
      <div className="gridTableMenus__list">
        <GridTableMenusList />
      </div>
      <div className="gridTableMenus__setting">
        <IconButton>
          <SettingsOutlinedIcon size="40px" />
        </IconButton>
      </div>
    </div>
  );
};

export default GreatTableMenus;
