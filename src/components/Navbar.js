import React from "react";
import styles from "../styles/Navbar.module.css";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.telephoneBtn}>
          <Image src="/img/telephone.png" alt="" width={44} height={45} />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>Order Now !</div>
          <div className={styles.text}>+977 98481</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Homepage</li>
          <li className={styles.listItem}>Products</li>
          <li className={styles.listItem}>Menu</li>
          {/* <Image 
          src="/Img/logo_thumb.png" alt="" width={20} height={20} /> */}
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          <Image src="/Img/cart.png" alt="" width={30} height={30} />
          <div className={styles.counter}>2</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
