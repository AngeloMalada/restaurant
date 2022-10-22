import React from "react";
import { useState } from "react";
import Image from "next/image";
import styles from "../styles/Slider.module.scss";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";

const Slider = ({ productList }) => {
  const [slide, setSlide] = useState(0);
  const handleArrow = (direction) => {
    if (direction === "left") {
      setSlide(slide !== 0 ? slide - 1 : 2);
    }
    if (direction === "right") {
      setSlide(slide !== 2 ? slide + 1 : 0);
    }
  };

  return (
    //hero banner
    <div className={styles.container}>
      <p className={styles.akcija}>Dnevne akcije</p>
      {/* left arrow  */}
      <div
        className={styles.arrowContainer}
        style={{ left: 0 }}
        onClick={() => handleArrow("left")}
      >
        <AiOutlineArrowLeft className={styles.arrow} />
      </div>
      {/* photos */}
      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${-100 * slide}vw)` }}
      >
        {productList
          .filter((product) => product.category === "featured")
          .slice(-3)
          .reverse()
          .map((product, i) => (
            <Link href={`/product/${product._id}`} key={i}>
              <div className={styles.imageContainer}>
                <div className={styles.text}>
                  <h1>{product.title}</h1>
                  <h2>{product.description}</h2>
                  <p>{product.featuredText}</p>
                </div>
                <div className={styles.image}>
                  <Image
                    src={product.image}
                    alt=''
                    height={400}
                    width={400}
                    objectFit='contain'
                  />
                </div>
              </div>
            </Link>
          ))}
      </div>
      {/* right arrow */}
      <div
        className={styles.arrowContainer}
        style={{ right: 0 }}
        onClick={() => handleArrow("right")}
      >
        <AiOutlineArrowRight className={styles.arrow} />
      </div>
    </div>
  );
};

export default Slider;
