'use client'
import React,{useState} from "react";
import styles from "../styles/Feature.module.css";

import Image from "next/image";


const Feature = () => {

  const [index, setIndex] = useState(0)

  const images = [
    "/Img/milkTea.png",
    "/Img/momo_New_r.png",
    "/Img/chaumin3.png",
  ];

  const handleArrow = (direction)=>{
    if(direction==='l'){
      setIndex(index!==0 ? index-1: 2)
    }
    if(direction==='r'){
      setIndex(index!==2 ? index+1: 0)
    }
  }
  console.log(index)

  return (
    <div className={styles.container}>
      <div className={styles.arContainer} style={{ left: 0 }} >
        <Image
          src="/Img/arrowl.png"
          alt=""
          layout="fill"
          onClick={() => handleArrow("l")}
          objectFit="contain"
        />
      </div>
      <div className={styles.wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
        {images.map((img, i) => (
          <div className={styles.imgContainer} key={i}>
            <Image src={img} alt="" layout="fill" objectFit="contain"/>
          </div>
        ))}
      </div>
      <div className={styles.arContainer} style={{ right: 0 }}>
        <Image
          src="/Img/arrowr.png"
          alt=""
          layout="fill"
          onClick={() => handleArrow("r")}
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default Feature;
