import React from "react";
import styles from "../styles/Card.module.css";
import Image from "next/image";
import Link from "next/link";

const Card = ({product}) => {
  return (
    <div className={styles.container}>
      <Link href={`/products/${product._id}`} passHref>
      <Image
        src={product.img}
        alt=""
        width={250}
        height={250}
        style={{ objectFit: "contain", boxShadow: "0px 0px 9px #ccc" }}
      />
      </Link>
      <div className={styles.title}>{product.title}</div>
      <span className={styles.price}>{product.price}</span>
      <p className={styles.desc}>{product.desc}</p>
    </div>
  );
};

export default Card;
