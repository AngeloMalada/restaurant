import React from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { reset } from "../redux/cartSlice";
import styles from "../styles/Success.module.scss";

const NewestOrder = () => {
  const [order, setOrder] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  //find most recent order from email
  const handleOrder = async () => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/orders/`,
      {
        email: user.user.email,
      }
    );

    setOrder(response.data);

    //use effect and trigger handleOrder

    //save data into const
  };

  useEffect(() => {
    handleOrder();
    dispatch(reset());
  }, []);

  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.text}>Order Summary</h1>
        {order !== "" &&
          order.slice(-1).map((details, i) => {
            return (
              <div key={i} className={styles.outerDiv}>
                <div>
                  <h3 className={styles.text}>{user.user.userName}</h3>
                  <h3 className={styles.text}>{details.customer}</h3>
                  <h3 className={styles.text}>{details.total} EUR</h3>
                  <h3 className={styles.text}>{details.createdAt}</h3>
                </div>
                {/* map over details and show titles */}
                <div className={styles.outer}>
                  <div>
                    <h1 className={styles.text}>Products</h1>
                    {details.title.map((detail, i) => {
                      return (
                        <div key={i}>
                          <p className={styles.detail}>{detail}</p>
                        </div>
                      );
                    })}
                  </div>
                  <div>
                    <h1 className={styles.text}>Extras</h1>
                    <div className={styles.extra}>
                      {details.extras.map((detail, i) => {
                        return (
                          <div key={i} className={styles.titles}>
                            {/* if detail is empty return "nema dodataka" */}
                            {detail.length === 0 ? (
                              <p className={styles.detail}>No extras</p>
                            ) : (
                              detail.map((extra) => {
                                return (
                                  <p key={extra.id} className={styles.detail}>
                                    {extra.text}
                                  </p>
                                );
                              })
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <div className={styles.status}>
        {order !== "" &&
          order.slice(-1).map((details, i) => {
            return (
              <div>
                <h1 key={i} className={styles.text}>
                  Status: {details.status}
                </h1>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default NewestOrder;
