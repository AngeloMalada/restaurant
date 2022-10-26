import React from "react";
import styles from "../styles/Navbar.module.scss";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { MdFastfood } from "react-icons/md";
import Image from "next/image";

import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useSelector } from "react-redux";
import Link from "next/link";

const Navbar = () => {
  // logic for opening hamburger menu
  const [openHambuger, setOpenHambuger] = useState(false);
  const handleOpenHamburger = () => {
    setOpenHambuger((prev) => !prev);
  };

  const quantity = useSelector((state) => state.cart.quantity);
  const user = useSelector((state) => state.user);

  return (
    // main div
    <div className={styles.outerDiv}>
      {/* desktop navbar */}
      <div className={styles.container}>
        <div className={styles.item}>
          {/* <BsFillTelephoneOutboundFill className={styles.icon} /> */}
          <div>
            <p className={styles.text}>Order now</p>
          </div>
        </div>
        <div className={styles.item}>
          <ul className={styles.list}>
            <li className={styles.listItem}>dobrodosli</li>
            <li className={styles.listItem}>jelovnik</li>
            <li className={styles.listItem}>
              <Link href="/">
                <Image
                  className={styles.image}
                  src="https://batak-grill.hr/wp-content/uploads/2020/05/Batak-logo.svg"
                  height="80px"
                  width="80px"
                />
              </Link>
              {/* <MdFastfood className={styles.icon} /> */}
            </li>
            <li className={styles.listItem}>rezervacije</li>
            <li className={styles.listItem}>o nama</li>
          </ul>
        </div>
        {/* <div className={styles.item}>
         
        </div> */}
        <div className={styles.item}>
          <p className={styles.text}>kontakt</p>
          {user.user ? (
            <p>{user.user.userName}</p>
          ) : (
            <Link href="/login">
              <p>Login</p>
            </Link>
          )}

          <Link href="/cart">
            <div className={styles.cart}>
              <HiOutlineShoppingCart className={styles.cartIcon} />

              <div className={styles.cartItems}>{quantity}</div>
            </div>
          </Link>
        </div>
      </div>
      {/* mobile navbar */}
      <div className={styles.hamburger}>
        <GiHamburgerMenu
          className={styles.hamburgerMenu}
          onClick={handleOpenHamburger}
        />
        <Link href="/">
          <Image
            className={styles.image}
            src="https://batak-grill.hr/wp-content/uploads/2020/05/Batak-logo.svg"
            height="60px"
            width="60px"
          />
        </Link>
        <Link href="/cart">
          <div className={styles.cart}>
            <HiOutlineShoppingCart className={styles.cartIcon} />

            <div className={styles.cartItems}>{quantity}</div>
          </div>
        </Link>
      </div>
      {/* show hamburgermenu when openhamburger variable is set to true and dont show it when its false,some nice animation with it aswell */}
      {openHambuger && (
        <motion.div
          initial={{
            x: -200,
          }}
          animate={{
            x: 0,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          className={styles.mobileMenu}
        >
          <ul className={styles.mobileList}>
            <li className={styles.mobileListItem}>test</li>
            <li className={styles.mobileListItem}>test</li>
            <li className={styles.mobileListItem}>test</li>
            <li className={styles.mobileListItem}>test</li>
            <li className={styles.mobileListItem}>test</li>
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
