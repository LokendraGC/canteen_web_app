"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "../../../styles/productItem.module.css";
import { useDispatch } from "react-redux";
import { addProduct, reset } from "@/app/redux/cartSlice";
import { useEffect } from "react";

const Product = ({ params }) => {
  const dispach = useDispatch();
  const [extras, setExtras] = useState({
    "With Spice": false,
    "With Sauce": false,
  });
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState(1);
  const [fetchedProduct, setFetchedProduct] = useState([]);

  useEffect(() => {
    const fetchFunction = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/products/${params.id}`
        );
        const data = await response.json();
        setFetchedProduct(data.result || []);
        console.log("tait");
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchFunction();
  }, []);

  const handleCheckboxChange = (optionText, isChecked) => {
    setExtras((prevExtras) => ({
      ...prevExtras,
      [optionText]: isChecked,
    }));
  };

  useEffect(() => {
    console.log(extras);
  }, [extras]);

  // const Price = fetchedProduct.price;

  const handleClick = () => {
    dispach(
      addProduct({
        fetchedProduct,
        extras,
        price,
        quantity: parseInt(quantity),
      })
    );
  };

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
          {fetchedProduct?.extraOptions?.map((option) => (
            <div className={styles.option} key={option._id}>
              <input
                type="checkbox"
                name={option.text}
                id={option.text}
                className={styles.checkbox}
                onChange={(e) =>
                  handleCheckboxChange(option.text, e.target.checked)
                }
              />
              <label className={styles.text} htmlFor="spicy">
                {option.text}
              </label>
            </div>
          ))}
        </div>
        <div className={styles.add}>
          <input
            type="number"
            name="number"
            id=""
            defaultValue={1}
            onChange={(e) => setQuantity(e.target.value)}
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
