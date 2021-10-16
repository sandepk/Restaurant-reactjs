import React, { useState } from "react";
import "./ButtonGroup.scss";
import { Button } from "@mui/material";
import {v4 as uuidv4} from 'uuid';
const buttons = [
  { name: "Drinks", id: 1 },
  { name: "Food", id: 2 },
  { name: "Dessert", id: 3 },
];
const ButtonGroup = (props) => {
  const [activeButton, setActiveButton] = useState(1);
  const choseButton = (e, number) => {
      setActiveButton(number)
  };
  let renderedButtons = null;
  renderedButtons = buttons.map((item, index) => {
    return (
      <Button
      key = {uuidv4()}
        className={`button__css ${activeButton === item.id && "active__button"} `}
        {...item}
        onClick={(e) => choseButton(e, item.id)}
      >
        {item.name}
      </Button>
    );
  });

  return (
    <div className="buttonGroup__container">
     {renderedButtons}
    </div>
  );
};

export default ButtonGroup;
