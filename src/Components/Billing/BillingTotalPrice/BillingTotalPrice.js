import React,{useState,useEffect} from "react";
import { Button } from "@mui/material";
import {v4 as uuidv4} from 'uuid';
import './BillingTotalPrice.scss'
import { useSelector } from "react-redux";
const BillingTotalPrice = (props) => {
   const amountPayable = useSelector((state) => state.reducer.amountPayable);
  const [billingData,setBillingData] = useState(
    {
      SubTotal: 0,
      "Estimated Taxes": 23,
      Discount: 12,
      TotalAmountToBePaid:0
    }
  )



  const calculateExpenses = (amountPayableDetails) =>{
    let itemTypes = ["Drinks","Food","Dessert"]
    let tempSubTotal = 0;
    itemTypes.map(item=>{
      if(amountPayableDetails[item] ){

          tempSubTotal += +amountPayableDetails[item];
        }
        return item;
      })
    let estimatedTax = +tempSubTotal*0.3;
    estimatedTax = estimatedTax.toFixed(2)
    let discount = +tempSubTotal*0.1;
    discount = discount.toFixed(2)
    
    let TotalAmountToBePaid = +tempSubTotal + +estimatedTax - +discount;
    TotalAmountToBePaid = TotalAmountToBePaid.toFixed(2)
    setBillingData(prev=>{
      return{
        ...prev,
        SubTotal:tempSubTotal,
        "Estimated Taxes":estimatedTax,
        Discount:discount,
        TotalAmountToBePaid:TotalAmountToBePaid
        
      }
    })
  }

  useEffect(() => {
   calculateExpenses(amountPayable)
  }, [amountPayable])



  let billingDetails = null;
  
  billingDetails = Object.keys(billingData).splice(0,3).map((key,index) => {
    return (
      <div className="billingTotalPrice__expense" key={uuidv4()}>
        <div className="billingTotaPrice__expenseName">{key}</div>
        <div className="billingTotaPrice__expenseAmount">${billingData[key]}</div>
      </div>
    );
  });
  return (
    <div className="billingTotalPrice__container">
      <div className="billingTotalPrice__expenseList">{billingDetails}</div>
      <div className="billingTotalPrice__totalBill">
          <Button 
          style={{width:"100%",background:"#438E1A",color:"white",padding:"5px",borderRadius:"5px"}}
          >Pay ${billingData["TotalAmountToBePaid"]}</Button>
      </div>
    </div>
  );
};

export default BillingTotalPrice;
