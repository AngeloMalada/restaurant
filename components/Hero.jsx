import React from "react";
import Image from "next/image";
import styles from "../styles/Hero.module.scss";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { useState } from "react";
import { useEffect } from "react";
const Hero = () => {
  const [slide, setSlide] = useState(0);
  const handleArrow = (direction) => {
    if (direction === "left") {
      setSlide(slide !== 0 ? slide - 1 : 2);
    }
    if (direction === "right") {
      setSlide(slide !== 2 ? slide + 1 : 0);
    }
  };
  useEffect(() => {
    //increment slide every 5 seconds if less than 3
    const interval = setInterval(() => {
      setSlide(slide !== 2 ? (prev) => prev + 1 : 0);
    }, 5000);
    return () => clearInterval(interval);
  }, [slide]);

  console.log(slide);
  return (
    <div className={styles.container}>
      <div
        className={styles.arrowContainerLeft}
        onClick={() => handleArrow("left")}
      >
        <BsFillArrowLeftCircleFill className={styles.arrow} />
      </div>
      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${-100 * slide}vw)` }}
      >
        <div className={styles.image}>
          <Image
            src='/images/mcdonalds.jpeg'
            layout='intrinsic'
            objectFit='contain '
            height={804}
            width={1920}
          />
        </div>
        <div className={styles.image}>
          <Image
            src='/images/coffee.jpeg'
            layout='intrinsic'
            objectFit='contain '
            height={804}
            width={1920}
          />
        </div>
        <div className={styles.image}>
          <Image
            src='/images/glovo.gif'
            layout='intrinsic'
            objectFit='contain '
            height={804}
            width={1920}
          />
        </div>
      </div>
      <div className={styles.arrowContainerRight}>
        <BsFillArrowRightCircleFill
          className={styles.arrow}
          onClick={() => handleArrow("right")}
        />
      </div>
    </div>
  );
};

export default Hero;
