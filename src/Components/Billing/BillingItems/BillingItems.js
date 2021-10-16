import React, { useState, useEffect } from "react";
import BillingItem from "./BillingItem/BillingItem";
import "./BillingItems.scss";
import { useDispatch, useSelector } from "react-redux";
import { updateAmountPayable } from "../../../store/action";
import {v4 as uuidv4} from 'uuid';

const BillingItems = (props) => {
  const dispatch = useDispatch();
  const amountPayable = useSelector((state) => state.reducer?.amountPayable);
  const [totalPriceOfCategorisedItems, setTotalPriceOfCategorisedItems] =
    useState(0);

  const filterCartItems = (itemsList) => {
    let filteredItemsList = itemsList.filter((item) => {
      return item["quantity"] !== 0;
    });
    return filteredItemsList;
  };

  // function to calculate Total Price
  const calculateTotalPrice = (itemsList) => {
    let r = /\d+/;
    let filteredItemsList = itemsList.filter((item) => {
      return item["quantity"] !== 0;
    });
    let totalPrice = 0;
    filteredItemsList.length > 0 &&
      filteredItemsList.map((eachFilteredItem, index) => {
        let price =
          +eachFilteredItem["price"].match(r) * eachFilteredItem["quantity"];
        totalPrice += price;
      });
    let tempAmountPayable = { ...amountPayable, [props.itemsType]: totalPrice };
    dispatch(updateAmountPayable(tempAmountPayable))
    return totalPrice;
  };
  useEffect(() => {
    if (props.cartItemsDetails && props.cartItemsDetails.length > 0) {
      setTotalPriceOfCategorisedItems(
        calculateTotalPrice(props.cartItemsDetails)
      );
    }
  }, []);

  let renderedEachBillingItem = null;
  renderedEachBillingItem =
    props.cartItemsDetails &&
    props.cartItemsDetails.length > 0 &&
    filterCartItems(props.cartItemsDetails).map((eachCartData) => {
      return <BillingItem cartData={eachCartData} key={uuidv4()} />;
    });
  return (
    <div className="billingItems__container">
      <div className="billingItems__itemInfo">
        <div className="billingItems__itemType">{props.itemsType}</div>
        <div className="billingItems__totalPrice">
          ${totalPriceOfCategorisedItems}
        </div>
      </div>
      <div className="billingItems__listOfItemType">
        {renderedEachBillingItem}
      </div>
    </div>
  );
};

export default BillingItems;
