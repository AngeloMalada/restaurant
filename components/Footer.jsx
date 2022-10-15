import Image from "next/image";
import styles from "../styles/Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src='/images/bg.png' objectFit='cover' layout='fill' alt='' />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            Ako ljubav ide kroz želudac, Batak je onda glavni ljubavnik u gradu!
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            Batak kajzerica
            <br /> Zagreb, Remetinecka cesta 14
            <br /> +385 1 4888 001
          </p>
          <p className={styles.text}>
            Batak kajzerica
            <br /> Zagreb, Remetinecka cesta 14
            <br /> +385 1 4888 001
          </p>
          <p className={styles.text}>
            Batak kajzerica
            <br /> Zagreb, Remetinecka cesta 14
            <br /> +385 1 4888 001
          </p>
          <p className={styles.text}>
            Batak kajzerica
            <br /> Zagreb, Remetinecka cesta 14
            <br /> +385 1 4888 001
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 – 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 – 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
