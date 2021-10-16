import React, { useState } from "react";
import Card from "../UI/Card/Card";
import CountButton from "../UI/CountButton/CountButton";
import "./ItemDetails.scss";
import { useSelector,useDispatch } from "react-redux";
import {updateCartItems} from '../../store/action';
const ItemDetails = (props) => {
  const cartItems = useSelector(state=>state.reducer.cartItems);
  const dispatch = useDispatch();
  const [activeBeverage,setActiveBeverage] = useState(false);
  const [eachDrinkDetails, setEachDrinkDetails] = useState({
    id: props.id,
    type: props.type,
    drinkType: props.drinkType,
    name: props.name,
    price: props.price,
    quantity: props.quantity,
    imgsrc: props.imgsrc,
    totalPrice: 0,
  });

  const toggleActiveBeverages = ()=>{
    setActiveBeverage(prev=>!prev);
  }

  const quantityOfDrinkItem = (quantity) => {
    let tempDrinkDetails = {
      ...eachDrinkDetails,
    };
    let totalPrice = 0;
  
    if (quantity === 0) {
      totalPrice = 0;
      // if existing added items length is greater than zero
    } else {
      let r = /\d+/;
      totalPrice = +tempDrinkDetails["price"].match(r) * quantity;
    }
    tempDrinkDetails["quantity"] = quantity;
    tempDrinkDetails["totalPrice"] = `${"$" + totalPrice}`;
    setEachDrinkDetails((prev) => {
      return {
        ...prev,
        ...tempDrinkDetails,
      };
    });
    // array of drinks
    let tempCartItemsTypeList = cartItems?.[props.type];

    let tempFilteredOutExistingItem =(Array.isArray(tempCartItemsTypeList) && tempCartItemsTypeList.length > 0)?  tempCartItemsTypeList.filter(item=>item.id !== props.id):[];
    
    tempFilteredOutExistingItem.push(tempDrinkDetails);
     let newCartItems ={
       ...cartItems,
       [props.type]:tempFilteredOutExistingItem
     }
     dispatch(updateCartItems(newCartItems))

  };

  return (
    <div className="itemDetails__container">
      <div className="itemDetails__card">
        <Card {...props} toggleActiveBeverages={toggleActiveBeverages} activeBeverage ={activeBeverage} />
      </div>
      <div className="itemDetails__details" disabled={!activeBeverage}>
        <div className="itemDetails__nameAndPrice">
          <div className="itemDetails__name">{props.name}</div>
          <div className="itemDetails__price">{props.price}</div>
        </div>
        <div className="itemDetails__itemCount">
          <CountButton
            disabled={!activeBeverage}
            quantity={eachDrinkDetails["quantity"]}
            setQuantity={quantityOfDrinkItem}
          />
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
