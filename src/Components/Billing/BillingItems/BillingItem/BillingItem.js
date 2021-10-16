import React from "react";
import "./BillingItem.scss";
const BillingItem = (props) => {
  // cartItemData is an object
  const calculateTotalPrice = (cartItemData) => {
    let r = /\d+/;

    let price =
      +cartItemData["price"].match(r) * cartItemData["quantity"];
    return price;
  };

  return (
    <div className="billingItem__container">
      <div className="billingItem__name">{props.cartData.name}</div>
      <div className="billingItem__quantity">
        {props.cartData.quantity === 1 ? (
          <span>{props.cartData.price}</span>
        ) : (
          <span>
            {props.cartData.price} x {props.cartData.quantity}
          </span>
        )}
      </div>
      <div className="billingItem__totalPrice">
        ${calculateTotalPrice(props.cartData)}
      </div>
    
    </div>
  );
};

export default BillingItem;
