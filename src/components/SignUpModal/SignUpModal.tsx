import "./SignUpModal.scss";
import React, { useRef } from "react";
import { signUpProps } from "../../Types/types";
import Input from "../Input/Input";

const SignUpModal = ({ closeSignupModal }: signUpProps) => {
  const userNameRef: any = useRef();
  const emailRef: any = useRef();
  const phoneNumberRef: any = useRef();

  const handleSubmit = () => {
    console.log(
      userNameRef.current.value,
      emailRef.current.value,
      phoneNumberRef.current.value
    );
    closeSignupModal();
  };

  const datas = [
    { placeholder: "Username", id: "username", type: "text", ref: userNameRef },
    {
      placeholder: "Email address",
      id: "email",
      type: "email",
      errorMessage: "Please enter a valid email address",
      ref: emailRef,
    },
    {
      placeholder: "Phone Number",
      id: "phoneNumber",
      type: "text",
      ref: phoneNumberRef,
    },
  ];

  return (
    <div className="signup-modal">
      <div className="signup-modal__container">
        <>
          {datas.map((data: any) => (
            <Input
              key={data.id}
              type={data.type}
              placeholder={data.placeholder}
              ref={data.ref}
            />
          ))}
          <button onClick={handleSubmit} type="button">
            Sign Up
          </button>
        </>
      </div>
    </div>
  );
};

export default SignUpModal;
