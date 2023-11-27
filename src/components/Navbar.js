"use client";
import React from "react";
import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import { RiMenu2Fill } from "react-icons/ri";
import { MdRestaurantMenu } from "react-icons/md";
import { useState } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);

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
          <Link href={"/"}>
            <li className={styles.listItem} onClick={() => setMenuOpen(false)}>
              Homepage
            </li>
          </Link>
          <li className={styles.listItem}>Products</li>
          <li className={styles.listItem}>Menu</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <div className={styles.item}>
        <Link href="/cart" passHref>
          <div className={styles.cart}>
            <Image src="/Img/cart.png" alt="" width={30} height={30} />
            <div className={styles.counter}>{cart.products.length}</div>
          </div>
        </Link>
        {!menuOpen ? (
          <RiMenu2Fill
            size={30}
            className={styles.menu}
            onClick={toggleMenu}
            // style={{ display: !menuOpen ? "block" : "none" }}
          />
        ) : (
          <MdRestaurantMenu
            size={30}
            className={styles.cross}
            onClick={toggleMenu}
            // style={{ display: menuOpen ? "block" : "none" }}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
