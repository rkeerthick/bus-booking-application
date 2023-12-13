import './SignUpModal.scss'
import React, { useState } from "react";
import { signUpProps } from "../../Types/types";

const SignUpModal = ({closeSignupModal}: signUpProps) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleUserName = (value: string) => {
    setUserName(value);
  };

  const handleEmail = (value: string) => {
    setEmail(value);
  };

  const handlePhoneNumber = (value: string) => {
    setPhoneNumber(value);
  };

  return (
    <div className="signup-modal">
      <div className="signup-modal__container">
        <input
          type="text"
          placeholder="User Name"
          value={userName}
          onChange={(e: any) => handleUserName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e: any) => handleEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e: any) => handlePhoneNumber(e.target.value)}
        />
        <button onClick={closeSignupModal} type="button">Sign Up</button>
      </div>
    </div>
  );
};

export default SignUpModal;
