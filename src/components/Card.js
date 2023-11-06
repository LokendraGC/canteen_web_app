import React from "react";
import styles from "../styles/Card.module.css";
import Image from "next/image";

const Cart = () => {
  return (
    <div className={styles.container}>
      <Image
        src="/Img/samosa1.jpg"
        alt=""
        width={250}
        height={250}
        style={{ objectFit: "contain", boxShadow: "0px 0px 9px #ccc" }}
      />
      <div className={styles.title}>Samosa</div>
      <span className={styles.price}>Rs.40</span>
      <p className={styles.desc}>Rs 20 per Samosa</p>
    </div>
  );
};

export default Cart;
