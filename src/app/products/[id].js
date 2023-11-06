import React from "react";
import styles from '../styles/productItem.module.css'
import Image from "next/image";


const productItem = () => {

    const item = {
      id: 1,
      img: "/Img/samosa1.jpg",
      name: "Samosa",
      price: "Rs.40",
      desc: "Samosa is made up of poteto, 2 cups all-purpose flour and 4 tablespoons ghee (clarified butter) or oil",
    };

  return <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.imgContainer}>
                <Image src={item.img}  alt="" layout="fill"/>
            </div>
        </div>
        <div className={styles.right}></div>
    </div>;
};

export default productItem;
