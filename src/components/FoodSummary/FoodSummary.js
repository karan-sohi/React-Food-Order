import React from 'react';
import styles from './FoodSummary.module.css'

const FoodSummary = props => {
    return (
        <div className={styles.description}>
          <h1>Delicious food delivered to you</h1>
          <p>
            Choose your favorite meal from our brand selection of available
            meals and enjoy a delicous lunch or dinner at home.
          </p>
          <p>
            All our meals are cooked with high-quality ingredients, just-in-time
            and of course by experienced chefs!
          </p>
        </div>
    )
}

export default FoodSummary;