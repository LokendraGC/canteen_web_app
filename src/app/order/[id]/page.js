'use client'
import React, { useEffect, useState } from "react";
import styles from "../../../styles/Order.module.css";
import Image from "next/image";

const Order = ({params}) => {

   const [fetchedOrder, setFetchedOrder] = useState([]);

   useEffect(() => {
     const fetchFunction = async () => {
       try {
         const response = await fetch(
           `http://localhost:3000/api/orders/${params.id}`
         );
         const data = await response.json();
         setFetchedOrder(data.result || []);
         console.log("tait");
         console.log(data);
       } catch (err) {
         console.log(err.message);
       }
     };
     fetchFunction();
   }, []);

  let status = 0;
  const statusClass = (index) => {
    if (index - status < 1) return styles.done;
    if (index === 1) return styles.inProgress;
    if (index - status > 1) return styles.undone;
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.row}>
          <table className={styles.table}>
            <thead>
              <tr className={styles.trTitle}>
                <th>Order ID</th>
                <th>Name</th>
                <th> Address</th>
                <th>Total</th>
              </tr>
            </thead>

            <tbody>
              <tr className={styles.tr}>
                <td>
                  <span className={styles.ID}>{fetchedOrder._id}</span>
                </td>
                <td>
                  <span className={styles.name}>{fetchedOrder.customer}</span>
                </td>
                <td>
                  <span className={styles.status}>{fetchedOrder.address}</span>
                </td>
                <td>
                  <span className={styles.total}>{fetchedOrder.total}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={styles.row}>
          <div className={statusClass(0)}>
            <Image src="/Img/paid.png" alt="" width={30} height={30} />
            <span className={styles.payment}>Payment</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src="/Img/checked.png"
                alt=""
                width={20}
                height={20}
              />
            </div>
          </div>

          <div className={statusClass(1)}>
            <Image src="/Img/bake.png" alt="" width={30} height={30} />
            <span className={styles.payment}>Preparing</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src="/Img/checked.png"
                alt=""
                width={20}
                height={20}
              />
            </div>
          </div>

          <div className={statusClass(2)}>
            <Image src="/Img/delivered.png" alt="" width={30} height={30} />

            <span className={styles.payment}>Delivered</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src="/Img/checked.png"
                alt=""
                width={20}
                height={20} 
                
              />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Cart Total</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b> Rs.
            {fetchedOrder.total}
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b> Rs.0.0
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b> Rs.
            {fetchedOrder.total}
          </div>
          <button disabled className={styles.button}>
            PAID
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
