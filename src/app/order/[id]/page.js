import React from "react";
import styles from "../../../styles/Order.module.css";
import Image from "next/image";

const Order = () => {
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
              <tr className={styles.tr}>
                <th>Order ID</th>
                <th>Student Name</th>
                <th> Branch</th>
                <th>Total</th>
              </tr>
            </thead>

            <tbody>
              <tr className={styles.tr}>
                <td>
                  <span className={styles.ID}>124321</span>
                </td>
                <td>
                  <span className={styles.name}>Lokendra GC</span>
                </td>
                <td>
                  <span className={styles.branch}>BEI</span>
                </td>
                <td>
                  <span className={styles.total}>Rs.40</span>
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
            <b className={styles.totalTextTitle}>Subtotal:</b> Rs.40
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b> Rs.0.0
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b> Rs.40
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
