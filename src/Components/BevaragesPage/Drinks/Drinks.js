import React, { useState } from "react";
import "./Drinks.scss";
import ItemDetails from "../../ItemDetails/ItemDetails";
import {
  drinkItemsList,
  drinksCateogary,
} from "../../../Data/Drinks/drinkList";
import Dropdown from "../../UI/Dropdown/Dropdown";
import { v4 as uuidv4 } from "uuid";
const Drinks = () => {
  const [drinkCategories, setDrinkCategories] = useState(["Wine"]);
 
  // function to chose categories in drink Items
  const chosenDrinkItemsInCateogaries = (drinkList) => {
    let tempDrinkList = [];
    if (Array.isArray(drinkList) && drinkCategories.length > 0) {
      tempDrinkList = drinkList.filter(
        (drinkItem) => drinkCategories.indexOf(drinkItem.drinkType) > -1
      );
      return tempDrinkList;
    } else {
      return drinkList;
    }
  };

 


  //
  let renderedData = null;
  renderedData = chosenDrinkItemsInCateogaries(drinkItemsList).map(
    (item, index) => {
      return (
        <ItemDetails
          {...item}
          index={index}
          key={uuidv4()}
         
        />
      );
    }
  );

  return (
    <div className="drinks__container">
      <div className="drinks__dropdown">
        <Dropdown
          names={drinksCateogary}
          setDrinkCategories={setDrinkCategories}
        />
      </div>
      <div className="drinks__items">{renderedData}</div>
    </div>
  );
};

export default Drinks;
