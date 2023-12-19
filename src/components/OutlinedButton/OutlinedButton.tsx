import { outlinedButtonProps } from "../../Types/types";
import "./OutlinedButton.scss";

const OutlinedButton = ({
  type,
  isClicked,
  children,
  handleClick,
}: outlinedButtonProps) => {
  return (
    <button
      onClick={handleClick}
      className={`outlined-button ${isClicked ? "clicked" : ""}`}
      type={type}
    >
      {children}
    </button>
  );
};

export default OutlinedButton;
