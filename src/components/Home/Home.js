import {React, useState} from "react";
import Header from "../Header/Header";
import styles from "../Home/Home.module.css";
import FoodImage from "../Home/food-img.jpg";
import FoodSummary from "../FoodSummary/FoodSummary";
import Meals from "../Meals/Meals";
import Cart from "../Cart/Cart";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const Home = () => {

const [cartCount, setCartCount] = useState(0);
  const changeCartIcon = () => {
    const count = Object.entries(localStorage).length;
    setCartCount(count);
  };

  return (
    <div className={styles.container}>
      <Header cartNumber={cartCount}></Header>
      <img src={FoodImage}></img>
      <FoodSummary></FoodSummary>
      <div className={styles.mealItems}>
        <Meals
          meal_data={DUMMY_MEALS}
          changeCart={changeCartIcon}
        ></Meals>
      </div>
    </div>
  );
};

export default Home;
