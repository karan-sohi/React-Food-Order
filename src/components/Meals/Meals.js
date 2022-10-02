import React from "react";
import styles from "../Meals/Meals.module.css";
import FoodItem from "../FoodItem/FoodItem";

const Meals = (props) => {
  const changeCartHeading = () => {
    props.changeCart();
  };

  return props.meal_data.map((item) => {
    return (
      <div>
        <FoodItem changeCartButton={changeCartHeading} meal={item}></FoodItem>
        <div className={styles.line}></div>
      </div>
    );
  });
};

export default Meals;
