import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.scss";
import { logo } from "../images/logo.svg";
import Slider from "../components/Slider";
import Menu from "../components/Menu";
import axios from "axios";

export default function Home({ productList }) {
  return (
    <div>
      <Head>
        <title>Restaurant</title>
        <meta name='description' content='Restaurant' />
        <link rel='icon' href='/images/favicon.png' />
      </Head>
      <div className={styles.red}>
        <Navbar />
        {/* <Slider /> */}
        <Slider />
        <Menu productList={productList} />
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      productList: res.data,
    },
  };
};
