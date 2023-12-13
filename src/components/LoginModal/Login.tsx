import './Login.scss'
import React, { useState } from "react";
import { loginProps } from "../../Types/types";

const Login = ({ closeLoginModal }: loginProps) => {
  const [email, setEmail] = useState("");

  const handleChange = (value: string) => {
    setEmail(value);
  };

  const handleClick = () => {
    alert(email);
    closeLoginModal();
  }

  return (
    <div className="login-modal">
      <div className="login-modal__container">
        <input
          type="text"
          placeholder="Enter email"
          value={email}
          onChange={(e: any) => handleChange(e.target.value)}
        />
        <button onClick={handleClick} type="submit">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
