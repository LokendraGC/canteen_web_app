import React from 'react'
import styles from '../styles/Product.module.css'
import Cart from './Card';



const Product = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Where Food Meets Efficiency</h1>
      <p className={styles.desc}>
        Discover a smarter way to manage your canteen operations with our
        user-friendly platform. From menu planning and order management to
        seamless transactions and insightful analytics, we make canteen
        management a breeze. Join us in creating a more efficient and enjoyable
        dining experience for everyone.
      </p>
      <div className={styles.wrapper}>
        <Cart/>
        <Cart/>
        <Cart/>
        <Cart/>
        <Cart/>
        <Cart/>
        <Cart/>
        <Cart/>
      </div>
    </div>
  );
}

export default Product