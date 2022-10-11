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

        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/public/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/public/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/public/favicon-16x16.png'
        />
        <link rel='manifest' href='/public/site.webmanifest' />
        <link
          rel='mask-icon'
          href='/public/safari-pinned-tab.svg'
          color='#5bbad5'
        />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#ffffff' />
      </Head>
    </div>
  );
}
