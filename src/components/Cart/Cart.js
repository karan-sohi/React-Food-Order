import React from "react";
import CartItems from "../CartItems/CartItems";
import classes from "./Cart.module.css";
import Modal from "../UI/Button/Modal";

const Cart = (props) => {
  const cartItems = <ul>{[
    {
      id: "m1",
      name: "Sushi",
      amount: 3,
      price: 22.99,
    },
  ].map((item) => <li>{item.name}</li>)}</ul>;

  return <Modal>
    {cartItems}
    <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
    </div>
    <div className={classes.actions}>
        <button className={classes['button-alt']}>Close</button>
        <button className={classes.button}>Order</button>
    </div>
  </Modal>;
};

export default Cart;
