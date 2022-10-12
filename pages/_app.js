import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.outer}>
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
