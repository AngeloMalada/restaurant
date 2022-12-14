import React from "react";
import styles from "../styles/OrderComponent.module.scss";
import Image from "next/image";

const OrderComponent = () => {
  const status = 0;

  const statusClass = (i) => {
    if (i - status < 1) return styles.done;
    if (i - status === 1) return styles.inProgress;
    if (i - status > 1) return styles.undone;
  };
  return (
    <div className={styles.container}>
      <div className={styles.details}>
        <div className={styles.row}>
          <table className={styles.table}>
            <tbody>
              <tr className={styles.trTitle}>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Address</th>
                <th>Total</th>
              </tr>
              <tr className={styles.tr}>
                <td>
                  <span className={styles.id}>129837819237</span>
                </td>
                <td>
                  <span className={styles.name}>John Doe</span>
                </td>
                <td>
                  <span className={styles.address}>Elton st. 212-33 LA</span>
                </td>
                <td>
                  <span className={styles.total}>$79.80</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.row}>
          <div className={statusClass(0)}>
            <Image src='/images/paid.png' width={30} height={30} alt='' />
            <span>Payment</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src='/images/checked.png'
                width={20}
                height={20}
                alt=''
              />
            </div>
          </div>
          <div className={statusClass(1)}>
            <Image src='/images/bake.png' width={30} height={30} alt='' />
            <span>Preparing</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src='/images/checked.png'
                width={20}
                height={20}
                alt=''
              />
            </div>
          </div>
          <div className={statusClass(2)}>
            <Image src='/images/bike.png' width={30} height={30} alt='' />
            <span>On the way</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src='/images/checked.png'
                width={20}
                height={20}
                alt=''
              />
            </div>
          </div>
          <div className={statusClass(3)}>
            <Image src='/images/delivered.png' width={30} height={30} alt='' />
            <span>Delivered</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src='/images/checked.png'
                width={20}
                height={20}
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.cart}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>$79.60
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>$0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>$79.60
          </div>
          <button disabled className={styles.button}>
            PAID
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderComponent;
