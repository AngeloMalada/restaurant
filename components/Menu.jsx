import React from "react";
import styles from "../styles/Menu.module.scss";
import MealCard from "./MealCard";
import Image from "next/image";

const Menu = ({ productList }) => {
  return (
    <div className={styles.container}>
      <div className={styles.textBg}>
        {/* <h1 className={styles.title}>naruci. Skupljaj. Uzivaj.</h1>
        <p className={styles.text}>
          U McDonald's aplikaciji skupljaj bodove uz svaku narudžbu i zamijeni
          ih za omiljene proizvode!
        </p> */}
        <Image
          src='/images/loyalty.jpeg'
          layout='intrinsic'
          objectFit='contain'
          width={1920}
          height={400}
        />
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
