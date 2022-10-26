import React from "react";
import { setUser } from "../redux/userSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styles from "../styles/Login.module.scss";
import { removeUser } from "../redux/userSlice";
import { useState } from "react";
import { useRouter } from "next/router";

const Register = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");

  const router = useRouter();

  const handleRegister = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: userName,
          email: email,
          password: password,
        }),
      }
    );
    if (response.statusCode === 500) {
      return;
    }
    const data = await response.json();

    router.push("/login");
  };

  // const dispatch = useDispatch();
  // const user = useSelector((state) => state.user);
  // //handle click
  // const handleClick = (userName, password, email) => {
  //   dispatch(
  //     setUser({
  //       userName,
  //       password,
  //       email,
  //     })
  //   );
  // };

  // const handleRemove = () => {
  //   dispatch(removeUser());
  // };

  return (
    <div>
      <input
        type="text"
        name="userName"
        placeholder="username"
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="text"
        name="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="email"
        name="email"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={() => handleClick(userName, password, email)}>
        asdfasdasd
      </button>
      <button onClick={() => handleRegister()}>register</button>
      {/* <button onClick={() => handleRemove()}>remove user</button> */}

      {/* {user.user ? (
        <div className={styles.user}>
          <h1>{user.user.userName}</h1>
          <h1>{user.user.email}</h1>
          <h1>{user.user.password}</h1>
        </div>
      ) : (
        <div user> no user</div>
      )}
    
    */}
    </div>
  );
};

export default Register;
