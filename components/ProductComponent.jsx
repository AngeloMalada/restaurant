import styles from "../styles/Product.module.scss";
import Image from "next/image";
import { useState } from "react";

const ProductComponent = ({ singleProduct }) => {
  const [size, setSize] = useState(0);

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <div className={styles.imgContainer}>
          <Image
            src={singleProduct.image}
            objectFit='contain'
            layout='fill'
            alt=''
          />
        </div>
      </div>
      <div className={styles.details}>
        <h1 className={styles.title}>{singleProduct.title}</h1>
        <span className={styles.price}>${singleProduct.price[size]}</span>
        <p className={styles.desc}>{singleProduct.description}</p>
        <h3 className={styles.choose}>Choose the size</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => setSize(0)}>
            <Image src='/images/size.png' layout='fill' alt='' />
            <span className={styles.number}>Small</span>
          </div>
          <div className={styles.size} onClick={() => setSize(1)}>
            <Image src='/images/size.png' layout='fill' alt='' />
            <span className={styles.number}>Medium</span>
          </div>
          <div className={styles.size} onClick={() => setSize(2)}>
            <Image src='/images/size.png' layout='fill' alt='' />
            <span className={styles.number}>Large</span>
          </div>
        </div>
        <h3 className={styles.choose}>Choose additional ingredients</h3>
        <div className={styles.ingredients}>
          <div className={styles.option}>
            <input
              type='checkbox'
              id='double'
              name='double'
              className={styles.checkbox}
            />
            <label htmlFor='double'>Double Ingredients</label>
          </div>
          <div className={styles.option}>
            <input
              className={styles.checkbox}
              type='checkbox'
              id='cheese'
              name='cheese'
            />
            <label htmlFor='cheese'>Extra Cheese</label>
          </div>
          <div className={styles.option}>
            <input
              className={styles.checkbox}
              type='checkbox'
              id='spicy'
              name='spicy'
            />
            <label htmlFor='spicy'>Spicy Sauce</label>
          </div>
          <div className={styles.option}>
            <input
              className={styles.checkbox}
              type='checkbox'
              id='garlic'
              name='garlic'
            />
            <label htmlFor='garlic'>Garlic Sauce</label>
          </div>
        </div>
        <div className={styles.add}>
          <input type='number' defaultValue={1} className={styles.quantity} />
          <button className={styles.button}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductComponent;
