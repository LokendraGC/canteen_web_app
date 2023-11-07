import React from 'react'
import styles from '../styles/Product.module.css'
import Cart from './Card';



const Product = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Where Food Meets Efficiency</h1>
      <p className={styles.desc}>
        Welcome to Sagarmatha Canteen, where delicious flavors meet
        convenience. Established with a passion for good food, we offer a
        diverse menu of mouthwatering dishes and refreshing beverages. Explore
        our menu, discover daily specials, and place orders online. We're
        committed to serving you with a smile, ensuring your dining experience
        is a delightful one. Join us at Sanepa, Lalitpur, and savor the
        taste of quality cuisine at affordable prices. We look forward to
        serving you soon!
      </p>
      <div className={styles.wrapper}>
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
      </div>
    </div>
  );
}

export default Product