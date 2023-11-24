"use client";
import React, { useState } from "react";
import styles from "../../styles/Cart.module.css";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import OrderDetail from "@/components/OrderDetail";
import axios from "axios";
// import { useRouter } from "next/navigation";
import { useRouter } from "next/navigation";
import { reset } from "../redux/cartSlice";

const Cart = () => {
  const router = useRouter();
  const createOrder = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/orders",
        data
      );
      console.log(response);
      if (response.status === 201) {
        dispatch(reset());
        router.push(`/order/${response.data._id}`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  // createOrder();

  const [open, setOpen] = useState(false);
  const [cash, setCash] = useState(false);

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <thead>
            <tr className={styles.trTitle}>
              <th>Product</th>
              <th>Name</th>
              <th>Extras</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>

          <tbody>
            {cart.products.map(({ product, quantity, total, extra }, state) => (
              <tr className={styles.tr} key={state}>
                <td>
                  <div className={styles.imgContainer}>
                    <Image
                      src={product.img}
                      alt=""
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </td>
                <td>
                  <span className={styles.name}>{product.title}</span>
                </td>
                <td className={styles.extras}>
                  {Object.keys(extra)
                    .filter((key) => extra[key] === true)
                    .map((value, state) => (
                      <p key={state}>{value}</p>
                    ))}
                </td>
                <td>
                  <span className={styles.price}>Rs.{product.price}</span>
                </td>
                <td>
                  <span
                    className={styles.quantity}
                    style={{ paddingLeft: "33px" }}
                  >
                    {quantity}
                  </span>
                </td>
                <td>
                  <span className={styles.total}>{total}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {cart.products.map(({ total }) => (
        <div className={styles.right}>
          <div className={styles.wrapper}>
            <h2 className={styles.title}>Cart Total</h2>
            <div className={styles.totalText}>
              <b className={styles.totalTextTitle}>Subtotal:</b> Rs.
              {total}
            </div>
            <div className={styles.totalText}>
              <b className={styles.totalTextTitle}>Discount:</b> Rs.0.0
            </div>
            <div className={styles.totalText}>
              <b className={styles.totalTextTitle}>Total:</b> Rs.
              {total}
            </div>
            {open ? (
              <div className={styles.paymentMethod}>
                <button
                  className={styles.cashBtn}
                  onClick={() => setCash(true)}
                >
                  CASH ON DELIVERY
                </button>
              </div>
            ) : (
              <button onClick={() => setOpen(true)} className={styles.button}>
                CHECKOUT NOW!
              </button>
            )}
          </div>
          {cash && <OrderDetail total={total} createOrder={createOrder} />}
        </div>
      ))}
    </div>
  );
};

export default Cart;
