import styles from "../styles/Product.module.scss";
import Image from "next/image";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/cartSlice";
import Product from "../pages/product/[id]";

const ProductComponent = ({ singleProduct }) => {
  const [size, setSize] = useState(0);
  const [price, setPrice] = useState(singleProduct.price[0]);
  const [extraIngreadients, setExtraIngreadients] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const changePrice = (num) => {
    setPrice(price + num);
  };

  const handleSize = (i) => {
    const diff = singleProduct.price[i] - singleProduct.price[size];
    setSize(i);
    changePrice(diff);
  };

  const handleChange = (e, extra) => {
    const checked = e.target.checked;
    if (checked) {
      changePrice(extra.price);
      setExtraIngreadients((prev) => [...prev, extra]);
    } else {
      changePrice(-extra.price);
      setExtraIngreadients(
        extraIngreadients.filter(
          (extraIngreadient) => extraIngreadient._id !== extra._id
        )
      );
    }
  };
  const handleClick = () => {
    dispatch(
      addProduct({ ...singleProduct, price, extraIngreadients, quantity })
    );
    console.log(extraIngreadients);
  };
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
        <span className={styles.price}>${price}</span>
        <p className={styles.desc}>{singleProduct.description}</p>
        {singleProduct.price.length > 1 && (
          <div className={styles.outerWrapper}>
            <h3 className={styles.choose}>Choose the size</h3>
            <div className={styles.sizes}>
              <div className={styles.size} onClick={() => handleSize(0)}>
                <Image src='/images/size.png' layout='fill' alt='' />
                <span className={styles.number}>Small</span>
              </div>
              <div className={styles.size} onClick={() => handleSize(1)}>
                <Image src='/images/size.png' layout='fill' alt='' />
                <span className={styles.number}>Medium</span>
              </div>
              <div className={styles.size} onClick={() => handleSize(2)}>
                <Image src='/images/size.png' layout='fill' alt='' />
                <span className={styles.number}>Large</span>
              </div>
            </div>
          </div>
        )}
        <h3 className={styles.choose}>Choose additional ingredients</h3>
        <div className={styles.ingredients}>
          {singleProduct.extras.map((extra) => (
            <div className={styles.option} key={extra._id}>
              <input
                type='checkbox'
                id={extra.text}
                name={extra.text}
                className={styles.checkbox}
                onChange={(e) => handleChange(e, extra)}
              />
              <label htmlFor='double'>{extra.text}</label>
            </div>
          ))}
        </div>
        <div className={styles.add}>
          <input
            onChange={(e) => setQuantity(e.target.value)}
            type='number'
            min={1}
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

export default ProductComponent;
