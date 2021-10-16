import { NOTIFICATION_WITH_MESSAGE, CART_ITEMS,AMOUNT_PAYABLE } from "./actionType";

const initialState = {
  notification: null,
  cartItems: {
    Drinks: [],
    Food: [],
    Dessert: [],
  },
  amountPayable: {
    Drinks: 0,
    Food: 0,
    Dessert: 0,
    subTotal: 0,
    estimatedTax: 0,
    discount: 0,
    totalPayable: 0,
  },
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case NOTIFICATION_WITH_MESSAGE:
      return {
        ...state,
        notification: action.notification,
      };
    case CART_ITEMS: {
      return {
        ...state,
        cartItems: {
          ...state["cartItems"],
          ...action.items,
        },
      };
    }
    case AMOUNT_PAYABLE: {
      return {
        ...state,
        amountPayable:action.status
      };
    }

    default:
      return state;
  }
};

export default Reducer;
