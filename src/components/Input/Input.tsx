import React, { forwardRef } from "react";
import { inputProps } from "../../Types/types";

const Input = forwardRef<HTMLInputElement, inputProps>((props, ref) => {
  const { type, placeholder } = props;
  return <input type={type} placeholder={placeholder} ref={ref} />;
});

export default Input;
