import "./LoginModal.scss";
import React, { useRef } from "react";
import { loginProps } from "../../Types/types";
import Button from "../Button/Button";
import Input from "../Input/Input";

const LoginModal = ({ closeLoginModal }: loginProps) => {
  const emailRef: any = useRef();

  const handleClick = () => {
    alert(emailRef.current.value);
    closeLoginModal();
  };

  const loginData = {
    type: "email",
    placeholder: "Enter your Email address",
    ref: emailRef,
  };

  return (
    <div className="login-modal">
      <div className="login-modal__container">
        <Input
          type="email"
          placeholder={loginData.placeholder}
          ref={loginData.ref}
        />
        <Button onClick={handleClick} type="button">
          Login
        </Button>
      </div>
    </div>
  );
};

export default LoginModal;
