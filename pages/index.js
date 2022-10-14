import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import { logo } from "../images/logo.svg";
import Slider from "../components/Slider";
import Banner from "../components/Banner";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Restaurant</title>
        <meta name='description' content='Restaurant' />
        <link rel='icon' href='favicon.png' />
      </Head>
      <div className={styles.red}>
        <Navbar />
        {/* <Slider /> */}
        <Slider />
        <div className={styles.inner}></div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
