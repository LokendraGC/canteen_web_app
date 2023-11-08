"use client"
import React from "react";
import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import {RiMenu2Fill} from 'react-icons/ri'
import {MdRestaurantMenu} from 'react-icons/md'
import { useState } from "react";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.telephoneBtn}>
          <Image src="/img/telephone.png" alt="" width={44} height={45} />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>Order Now !</div>
          <div className={styles.text}> 9848114263</div>
        </div>
      </div>

      
      <div className={styles.item}>
        <ul className={menuOpen ? styles.listMobile : styles.list}>
          <li className={styles.listItem}>Homepage</li>
          <li className={styles.listItem}>Products</li>
          <li className={styles.listItem}>Menu</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          <Image src="/Img/cart.png" alt="" width={30} height={30} />
          <div className={styles.counter}>2</div>
        </div>
          <RiMenu2Fill
            size={30}
            className={styles.menu}
            onClick={toggleMenu}
            style={{ display: menuOpen ? "none" : "block" }}
          />
          <MdRestaurantMenu
            size={30}
            className={styles.cross}
            onClick={toggleMenu}
            style={{ display: menuOpen ? "block" : "none" }}
          />
      </div>
    </div>
  );
};

export default Navbar;
