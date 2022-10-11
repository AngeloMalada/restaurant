import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import { logo } from "../images/logo.svg";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Restaurant</title>
        <meta name='description' content='Restaurant' />
        <link rel='shortcut icon' href='/images/favicon.ico' />
      </Head>
    </div>
  );
}
