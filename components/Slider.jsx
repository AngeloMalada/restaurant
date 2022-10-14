import React from "react";
import { useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
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

  const images = ["/dinner.jpg", "/dinner2.jpg", "/dinner3.jpg"];

  return (
    <div className={styles.container}>
      <div
        className={styles.arrowContainer}
        style={{ left: 0 }}
        onClick={() => handleArrow("left")}
      >
        <AiOutlineArrowLeft className={styles.arrow} />
      </div>
      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${-100 * slide}vw)` }}
      >
        {images.map((img, i) => (
          <div className={styles.imageContainer} key={i}>
            <div className={styles.text}>
              <p className={styles.text2}>Rezerviraj</p>
            </div>
            <Image src={img} alt='' layout='fill' objectFit='cover' />
          </div>
        ))}
      </div>
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
