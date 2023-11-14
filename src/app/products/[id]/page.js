import React from 'react'
import Image from "next/image";
import styles from '../../../styles/productItem.module.css'



const productItem = async({params}) => {
  
 
  let fetchedProduct = [];
  // console.log("hait")

  try {
    const response = await fetch(`http://localhost:3000/api/products/${params.id}`);
    const data = await response.json();
    fetchedProduct = data.result || [];
    console.log("tait")
    console.log(fetchedProduct);
  } catch (err) {
    console.log(err.message);
  }
  
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
              />
              <label className={styles.text} htmlFor="spicy">
                {option.text}
              </label>
            </div>
          ))}

          {/* <div className={styles.option}> 
          <input type="checkbox" name="sauce" id="sauce" 
          className={styles.checkbox}
          />
          <label className={styles.text} htmlFor="sauce">With Sauce</label>
          </div> */}
        </div>
        <div className={styles.add}>
          <input
            type="number"
            name="number"
            id=""
            defaultValue={1}
            className={styles.quantity}
          />
          <button className={styles.button}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default productItem;