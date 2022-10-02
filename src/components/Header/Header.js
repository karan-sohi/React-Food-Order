import { classes } from "istanbul-lib-coverage";
import React from "react";
import styles from "../Header/Header.module.css";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <div>
        <h1>React Meals</h1>
      </div>
      <button className={styles.cart}>Your Cart {props.cartNumber}
      </button>
    </header>
  );
};

export default Header;
