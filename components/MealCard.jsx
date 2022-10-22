import React from "react";
import styles from "../styles/MealCard.module.scss";
import Image from "next/image";
import Link from "next/link";

const MealCard = ({ product }) => {
  return (
    <div className={styles.container}>
      <Link href={`/product/${product._id}`} passHref>
        <Image src={product.image} alt='meal' width='200' height='200' />
      </Link>
      <h1 className={styles.title}>{product.title}</h1>
      <span className={styles.price}>${product.price[0]}</span>
      <p className={styles.text}>{product.description}</p>
    </div>
  );
};

export default MealCard;
