'use client'
import React from 'react'
import Image from "next/image";
import styles from '../../../styles/productItem.module.css'
import { useState } from "react";



const productItem = () => {

  const [itemm, setItemm] = useState(0)

  const item = {
    id: 1,
    img: "/Img/samosa1.jpg",
    name: "Samosa",
    price: [20,40,60],
    desc: "Samosa is made up of poteto, 2 cups all-purpose flour and 4 tablespoons ghee (clarified butter) or oil",
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={item.img} alt="" layout="fill" objectFit="contain" />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{item.name}</h1>
        <span className={styles.price}>Rs. {item.price[itemm]}</span>
        <p className={styles.desc}>{item.desc}</p>
        <h3 className={styles.choose}>Choose Additional Ingradients</h3>
        <div className={styles.ingradient}>
          <div className={styles.option}> 
          <input type="checkbox" name="spicy" id="spicy" 
          className={styles.checkbox}
          />
          <label htmlFor="spicy">With Spice</label>
          </div>
          <div className={styles.option}> 
          <input type="checkbox" name="sauce" id="sauce" 
          className={styles.checkbox}
          />
          <label htmlFor="sauce">With Sauce</label>
          </div>
        </div>
        <div className={styles.add}>
          <input type="number" name="number"
          id="" defaultValue={1} className={styles.quantity} />
          <button className={styles.button}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default productItem;