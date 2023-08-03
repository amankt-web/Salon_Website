import React, { useState,useEffect } from "react";
import {useNavigate} from 'react-router-dom';

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate =useNavigate();

  useEffect(()=>{
    const auth = localStorage.getItem("user");
    if(auth)
    {
      navigate('/Home')
    }
  })
  const collectData = async () => {
    console.warn(name, email, password);
    let result = await fetch("http://localhost:5000/register", {
      method : "post",
      body :  JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    localStorage.setItem("user",JSON.stringify(result));
    navigate('/Home')
  };
  return (
    <div class="register">
      <h1>Register</h1>
      <input
        class="inputBox"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        class="inputBox"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        class="inputBox"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={collectData} class="appButton" type="button">
        Sign Up
      </button>
    </div>
  );
};

export default SignUp;
