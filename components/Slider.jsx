import React from "react";
import { useState } from "react";
import Image from "next/image";
import styles from "../styles/Slider.module.scss";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Slider = () => {
  const [slide, setSlide] = useState(0);
  const handleArrow = (direction) => {
    if (direction === "left") {
      setSlide(slide !== 0 ? slide - 1 : 2);
    }
    if (direction === "right") {
      setSlide(slide !== 2 ? slide + 1 : 0);
    }
  };

  const images = [
    "/images/burger.png",
    "/images/pizza.png",
    "/images/rissoto.png",
  ];

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
        {images.map((img, i) => (
          <div className={styles.imageContainer} key={i}>
            <div className={styles.text}>
              <h1>Lorem, ipsum dolor.</h1>
              <h2>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse,
                maxime!
              </h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Corporis sed, quisquam eaque assumenda facere non sit
                repudiandae vitae asperiores debitis!
              </p>
            </div>
            <div className={styles.image}>
              <Image
                src={img}
                alt=''
                height={500}
                width={500}
                objectFit='contain'
              />
            </div>
          </div>
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
