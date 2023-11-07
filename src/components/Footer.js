import React from "react";
import styles from "../styles/Footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/Img/logo_thumb.png" alt="" width={550} height={200} />
        <h2>Sagarmatha Electronics Information Society</h2>
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          {/* <h2 className={styles.feedback}> Canteen Magic, Every Day.</h2> */}
        </div>
        <div className={styles.card} style={{paddingBottom:"14%"}}>
          <Image
            src="/Img/sagarmatha_logo.png"
            alt=""
            width={400}
            height={100}
          />
          <div className={styles.texts}>
          <h2 className={styles.title} >Sagarmathe Engineering College</h2>
          <p className={styles.desc}>M8Q3+729, Lalitpur 44600</p>
          Sanepa, Lalitpur
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
