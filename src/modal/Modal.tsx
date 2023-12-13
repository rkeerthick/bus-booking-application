import { createPortal } from "react-dom";
import { css } from "@emotion/css";
import { modalProps } from "../Types/types";
const MODAL_STYLES = css({
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // backgroundColor: "#FFF",
  // padding: "50px",
  zIndex: 1000,
});

const OVERLAY_STYLES = css({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, .7)",
  zIndex: 1000,
});


function Modal({ children, isOpen, toggleModal }: modalProps) {
  return !isOpen
    ? null
    : createPortal(
        <>
          <div onClick={toggleModal} className={OVERLAY_STYLES}></div>
          <div className={MODAL_STYLES}>{children}</div>
        </>,
        document.getElementById("modal")!
      );
}

export default Modal;
