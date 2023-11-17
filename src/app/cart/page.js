'use client'
import React from "react";
import styles from "../../styles/Cart.module.css";
import Image from "next/image";
import {useDispatch,useSelector} from "react-redux";


const Cart = () => {

  const dispatch = useDispatch();
  const cart = useSelector(state=>state.cart)
  const quantity = useSelector(state=>state.cart.quantity)
  
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
            {cart.products.map((product) => (
              <tr className={styles.tr} key={product._id}>
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
                <td>
                  {product.extraOptions.map((extra) => (
                    <span key={extra._id}>{extra.text}</span>
                    
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
                  <span className={styles.total}>
                    {product.price * quantity}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {cart.products.map((product) => (
        <div className={styles.right}>
          <div className={styles.wrapper}>
            <h2 className={styles.title}>Cart Total</h2>
            <div className={styles.totalText}>
              <b className={styles.totalTextTitle}>Subtotal:</b> Rs.
              {product.price * quantity}
            </div>
            <div className={styles.totalText}>
              <b className={styles.totalTextTitle}>Discount:</b> Rs.0.0
            </div>
            <div className={styles.totalText}>
              <b className={styles.totalTextTitle}>Total:</b> Rs.
              {product.price * quantity}
            </div>
            <button className={styles.button}>CHECKOUT NOW!</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
