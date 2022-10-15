import React from "react";
import styles from "../styles/MealCard.module.scss";
import Image from "next/image";

const MealCard = () => {
  return (
    <div className={styles.container}>
      <Image src='/images/burger.png' alt='Pizza' width='500' height='500' />
      <h1 className={styles.title}>Burger</h1>
      <span className={styles.price}>20.00eur</span>
      <p className={styles.text}></p>
    </div>
  );
};

export default MealCard;
