import React from "react";
import styles from "../styles/Menu.module.scss";
import MealCard from "./MealCard";

const Menu = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, cumque?
      </h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
        quibusdam illum corporis soluta magnam, hic quam fugiat dolorem.
        Explicabo, aut.
      </p>
      <div className={styles.wrapper}>
        <MealCard />
        <MealCard />
        <MealCard />
        <MealCard />
        <MealCard />
        <MealCard />
        <MealCard />
        <MealCard />
        <MealCard />
      </div>
    </div>
  );
};

export default Menu;
