import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import { logo } from "../images/logo.svg";
import Slider from "../components/Slider";
import Menu from "../components/Menu";

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
        <Menu />
      </div>
    </div>
  );
}
