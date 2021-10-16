import React from 'react'
import BillingItems from '../../../Components/Billing/BillingItems/BillingItems';
import './GreatTableBilling.scss'
import BillingTotalPrice from '../../../Components/Billing/BillingTotalPrice/BillingTotalPrice';
import { useSelector } from 'react-redux';
import Switch from '@mui/material/Switch';
import {v4 as uuidv4} from 'uuid';
const label = { inputProps: { 'aria-label': 'Switch demo' } };
const GreatTableBilling = () => {
const cartItems = useSelector(state=>state.reducer.cartItems);
  let renderedBillingItems = null;
  renderedBillingItems = cartItems && Object.keys(cartItems).map(item=>{
      return <BillingItems key={uuidv4()} itemsType ={item} cartItemsDetails ={cartItems[item]} />
  })
    return (
        <div className="greatTableBilling__container">
            <div className="greatTableBilling__header">
                <div className="greatTableBilling__headerText">Check</div>
                {/* <Switch {...label} defaultChecked label="Split Check" /> */}
            </div>
            <div className="greatTableBilling__listOfItems">
                {renderedBillingItems}
            </div>
            <div className="greatTableBilling_totalPrice">
             <BillingTotalPrice />
            </div>
        </div>
    )
}

export default GreatTableBilling
