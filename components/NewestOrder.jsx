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
    console.log(order);
    console.log(response.data);

    //use effect and trigger handleOrder

    //save data into const
  };

  useEffect(() => {
    handleOrder();
    dispatch(reset());
  }, []);

  return (
    <div className={styles.container}>
      Success
      <button onClick={handleOrder}>Order</button>
      <div>
        <h1>Order Summary</h1>

        <h3>{user.user.userName}</h3>
        {order !== "" &&
          order.slice(-1).map((details) => {
            return (
              <div>
                <h3>{details.customer}</h3>
                <h3>{details.total} EUR</h3>
                {/* map over details and show titles */}
                <div className={styles.outer}>
                  <div>
                    <h1>Products</h1>
                    {details.title.map((detail) => {
                      return (
                        <div>
                          <p className={styles.detail}>{detail}</p>
                        </div>
                      );
                    })}
                  </div>
                  <div>
                    <h1>Extras</h1>
                    {details.extras.map((detail) => {
                      return (
                        <div>
                          {/* make every text item go into new line in h3
                           */}
                          <p className={styles.detail}>{detail.join(" , ")}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default NewestOrder;
