import React from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/userSlice";
import { removeUser } from "../redux/userSlice";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [x, setX] = useState(0);

  const router = useRouter();
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  //create a login function
  const handleLogin = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      }
    );
    if (response.status === 404) {
      console.log(response.status);
      setX(1);
      console.log(x);
      return;
    } else {
      if (response.status === 200) {
        const data = await response.json();
        setX(0);

        dispatch(
          setUser({
            userName: data.data.username,
            password,
            email,
          })
        );
        router.push("/");
      }
    }
  };

  const handleLogout = () => {
    dispatch(removeUser());
  };

  return (
    <div>
      <div>
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
        <button onClick={() => handleLogin()}>login</button>
        <button onClick={() => handleLogout()}>Logout</button>
      </div>
      {x === 1 && (
        <div>
          <h1>Wrong password or email</h1>
        </div>
      )}
    </div>
  );
};

export default Login;
