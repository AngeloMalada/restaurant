import React from "react";
import styles from "../styles/Menu.module.scss";
import MealCard from "./MealCard";

const Menu = ({ productList }) => {
  return (
    <div className={styles.container}>
      <div className={styles.textBg}>
        <h1 className={styles.title}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, cumque?
        </h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          quibusdam illum corporis soluta magnam, hic quam fugiat dolorem.
          Explicabo, aut.
        </p>
      </div>
      <h1 className={styles.newItems}>New Items</h1>
      <div className={styles.wrapper}>
        {productList
          .filter((product) => product.category !== "featured")
          .slice(-6)
          .reverse()
          .map((product) => (
            <MealCard key={product._id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default Menu;
