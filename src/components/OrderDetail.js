import React, { useState } from "react";
import styles from "../styles/OrderDetail.module.css";

const OrderDetail = ({ total, createOrder }) => {
 
  const [customer, setCustomer] = useState("");
  const [address, setAddress] = useState("");

  const handleClick = () => {
    createOrder({customer,address,total,method:0 })
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <p className={styles.header}>You will pay Rs. 150 after delivery</p>
        <div className={styles.inputItem}>
          <label htmlFor="" className={styles.label}>
            Surename
          </label>
          <input
            type="text"
            placeholder="lokendra gc"
            className={styles.input}
            onChange={(e) => setCustomer(e.target.value)}
          />
        </div>
        <div className={styles.inputItem}>
          <label className={styles.label}>Phone No.</label>
          <input type="text" placeholder="optional" className={styles.input} />
        </div>

        <div className={styles.inputItem}>
          <label className={styles.label}>Address</label>
          <input
            type="text"
            placeholder="room no.102"
            className={styles.input}
            onChange={(e)=>setAddress(e.target.value)}
          />
        </div>
        <div></div>

        <button className={styles.orderBtn} onClick={handleClick}>
          ORDER
        </button>
      </div>
    </div>
  );
};

export default OrderDetail;
