import styles from "../styles/ShoppingCart.module.scss";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import getStripe from "../utils/getStripe";
import axios from "axios";
import { reset } from "../redux/cartSlice";
import { decrement, increment, removeProduct } from "../redux/cartSlice";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { MdOutlineClear } from "react-icons/md";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);

  const handleCheckout = async () => {
    const stripe = await getStripe();
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/stripe`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cart: cart, user: user }),
      }
    );
    if (response.statusCode === 500) {
      return;
    }
    const data = await response.json();

    stripe.redirectToCheckout({ sessionId: data.id });
  };

  const handleReset = () => {
    dispatch(reset());
  };

  //handle decrement
  const handleDecrement = (id, extraIngreadients, price, total) => {
    dispatch(decrement({ id, extraIngreadients, price, total }));
    console.log(user);
  };
  //handle increment
  const handleIncrement = (id, extraIngreadients, price, total) => {
    dispatch(increment({ id, extraIngreadients, price, total }));
  };

  //handle remove
  const handleRemove = (id, extraIngreadients, price, total) => {
    dispatch(removeProduct({ id, extraIngreadients, price, total }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.orderDetails}>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.trTitle}>
              <th className={styles.trProduct}>Product</th>
              <th>Name</th>
              <th>Extras</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
            {cart.products.map((product, i) => (
              <tr className={styles.tr} key={i}>
                <td className={styles.imageTd}>
                  <div className={styles.imgContainer}>
                    <Image
                      src={product.image}
                      layout="fill"
                      objectFit="contain"
                      alt=""
                    />
                  </div>
                </td>
                <td className={styles.item}>
                  <span className={styles.name}>{product.title}</span>
                </td>
                <td className={styles.item}>
                  <span className={styles.extras}>
                    {product.extraIngreadients.map((extra) => (
                      <p key={extra._id}>{extra.text} </p>
                    ))}
                  </span>
                </td>
                <td className={styles.item}>
                  <span className={styles.price}>EUR {product.price}</span>
                </td>
                <td className={styles.item}>
                  {/* decrement button */}
                  <AiFillMinusCircle
                    onClick={() =>
                      handleDecrement(
                        product._id,
                        product.extraIngreadients,
                        product.price,
                        product.price * product.quantity
                      )
                    }
                  />

                  <span className={styles.quantity}>{product.quantity}</span>
                  {/* increment button */}
                  <AiFillPlusCircle
                    onClick={() =>
                      handleIncrement(
                        product._id,
                        product.extraIngreadients,
                        product.price,
                        product.price * product.quantity
                      )
                    }
                  />

                  {/* remove buton */}
                  <MdOutlineClear
                    onClick={() =>
                      handleRemove(
                        product._id,
                        product.extraIngreadients,
                        product.price,
                        product.price * product.quantity
                      )
                    }
                  />
                </td>
                <td className={styles.item}>
                  <span className={styles.total}>
                    ${product.price * product.quantity}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.checkout}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>
            {cart.total}???
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>$0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>
            {cart.total}???
          </div>
          <button className={styles.button} onClick={handleCheckout}>
            CHECKOUT NOW!
          </button>
          <button className={styles.button} onClick={handleReset}>
            CLEAR CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
