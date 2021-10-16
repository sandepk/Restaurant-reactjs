import React, { useState } from "react";
import { Button } from "@mui/material";
import { Input } from "@mui/material";
import { useDispatch } from "react-redux";
import { showNotificationWithMessage } from "../../../store/action";
import "./CountButton.scss";
const CountButton = (props) => {
    const dispatch = useDispatch();
  const [count, setCount] = useState(0);
  const handleCount = (identifier) => {
    if (identifier === "add") {
        props.setQuantity(count+1);
        setCount((prev) => prev + 1);
    } else if (identifier === "substract") {
        if (count > 0) {
            setCount((prev) => prev - 1);
            props.setQuantity(count-1);
        }
    }
    dispatch(showNotificationWithMessage({
        variant:"success",
        message:"Cart updated!"
    }))
  };
  return (
    <div className="countButton__container">
      <Button
        className="countButton__item"
        onClick={() => handleCount("substract")}
        disabled={props.disabled}
      >
        -
      </Button>
      <Input
        className="countButton__item"
        style={{ textAlign: "center" }}
        value={props.quantity}
        disabled
      />
      <Button
        className="countButton__item"
        onClick={() => handleCount("add")}
        disabled={props.disabled}
      >
        +
      </Button>
    </div>
  );
};

export default CountButton;
