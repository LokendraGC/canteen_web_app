'use client'
import React from 'react'
import Image from "next/image";
import styles from '../../../styles/productItem.module.css'
import { useRouter } from 'next/router';
// import { useState } from "react";



const productItem = async() => {
  
  // const [itemm, setItemm] = useState(0);
  const router = useRouter();
  const {id} = router.query;
  console.log(id)
  // let fetchedProduct = [];
  // console.log("hait")

  // try {
  //   const response = await fetch(`http://localhost:3000/api/products/${params.id}`);
  //   const data = await response.json();
  //   fetchedProduct = data.result || [];
  //   console.log("tait")
  //   console.log(fetchedProduct);
  // } catch (err) {
  //   console.log(err.message);
  // }
  

  const item = {
    id: 1,
    img: "/Img/samosa1.jpg",

    name: "Samosa",
    price: 20,
    desc: "Samosa is made up of poteto, 2 cups all-purpose flour and 4 tablespoons ghee (clarified butter) or oil",
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={item.img} alt="" layout='fill' objectFit='contain' />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{item.name}</h1>
        <span className={styles.price}>Rs. {item.price}</span>
        <p className={styles.desc}>{item.desc}</p>
        <h3 className={styles.choose}>Choose Additional Ingradients</h3>
        <div className={styles.ingradient}>
          <div className={styles.option}> 
          <input type="checkbox" name="spicy" id="spicy" 
          className={styles.checkbox}
          />
          <label className={styles.text} htmlFor="spicy" >With Spice</label>
          </div>
          <div className={styles.option}> 
          <input type="checkbox" name="sauce" id="sauce" 
          className={styles.checkbox}
          />
          <label className={styles.text} htmlFor="sauce">With Sauce</label>
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