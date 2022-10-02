import {React, useState} from "react";
import styles from "../FoodItem/FoodItem.module.css";

const FoodItem = (props) => {
  const [amount, setAmount] = useState([
    {"name": "this", "amount": 3}
  ]);

  const amountChangeHandler = (event) => {
    const amountValue = event.target.value;
    const itemName = props.meal["name"];
    localStorage.setItem(itemName, amountValue);
    props.changeCartButton();
  };

  return (
    <div className={styles.fooditem}>
      <div>
        <h3>{props.meal["name"]}</h3>
        <p>{props.meal["description"]}</p>
        <h2>{props.meal["price"]}</h2>
      </div>
      <div className={styles.form}>
        <label>
          Amount <input type="number" value={localStorage.getItem(props.meal["name"])} onChange={amountChangeHandler}></input>
        </label>
        <button>+ Add</button>
      </div>
    </div>
  );
};

export default FoodItem;
