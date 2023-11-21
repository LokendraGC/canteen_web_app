"use client"
import React, { useState } from "react";
import Image from "next/image";
import styles from "../../../styles/productItem.module.css";
import { useDispatch } from "react-redux";
import { addProduct } from "@/app/redux/cartSlice";

const Product = async ({ params }) => {
  const [extras, setExtras] = useState([]);
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState(1);
  const dispach = useDispatch();

  // console.log(extras);

  let fetchedProduct = [];

  try {
    const response = await fetch(
      `http://localhost:3000/api/products/${params.id}`
    );
    const data = await response.json();
    fetchedProduct = data.result || [];
    // console.log("tait");
    // console.log(fetchedProduct);
  } catch (err) {
    console.log(err.message);
  }

  // const Price = fetchedProduct.price;

  const handleClick = () => {
    console.log("Hi")
    dispach(addProduct(fetchedProduct, extras, price, quantity));
  };

  //       const handleChange = (e,option)=>{
  //           const checked = e.target.checked;

  //           if(checked){
  //             setExtras((prev)=>[...prev,option])
  //           }else{
  //             setExtras(extras.filter((extra)=> extra._id !== option._id))
  //           }
  //       }
  // console.log(extras)

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image
            src={fetchedProduct.img}
            alt=""
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{fetchedProduct.title}</h1>
        <span className={styles.price}>Rs. {fetchedProduct.price}</span>
        <p className={styles.desc}>{fetchedProduct.desc}</p>
        <h3 className={styles.choose}>Choose Additional Ingradients</h3>
        <div className={styles.ingradient}>
          {fetchedProduct.extraOptions.map((option) => (
            <div className={styles.option} key={option._id}>
              <input
                type="checkbox"
                name={option.text}
                id={option.text}
                className={styles.checkbox}
                // onChange={(e) => handleChange(e, option)}
              />
              <label className={styles.text} htmlFor="spicy">
                {option.text}
              </label>
            </div>
          ))}
        </div>
        <div className={styles.add}>
          <input
            // onChange={(e)=>setQuantity(e.target.value)}
            type="number"
            defaultValue={1}
            className={styles.quantity}
          />
          <button className={styles.button} onClick={handleClick}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
