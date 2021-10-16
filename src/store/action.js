import { NOTIFICATION_WITH_MESSAGE, CART_ITEMS,AMOUNT_PAYABLE } from "./actionType";

export const showNotificationWithMessage = (status) => {
  return {
    type: NOTIFICATION_WITH_MESSAGE,
    notification: status,
  };
};

export const updateCartItems = (items) => {
  return {
    type: CART_ITEMS,
    items: items,
  };
};

export const updateAmountPayable =(amountReport)=>{
    
    return {
        type:AMOUNT_PAYABLE,
        status:amountReport

    }
}
