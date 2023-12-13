import { useState } from "react";
import Modal from "../../modal/Modal";
import Button from "../Button/Button";
import Login from "../LoginModal/Login";
import "./Header.scss";
import SignUpModal from "../SignUpModal/SignUpModal";

const Header = () => {
  const [loginModal, setLoginModal] = useState(false);
  const [signupModal, setSignupModal] = useState(false);
  const handleLoginModal = () => {
    setLoginModal((prev) => !prev);
  };

  const handleSignupModal = () => {
    setSignupModal(prev => !prev)
  }

  return (
    <>
      <Modal toggleModal={handleLoginModal} isOpen={loginModal}>
        <Login closeLoginModal={handleLoginModal} />
      </Modal>
      <Modal toggleModal={handleSignupModal} isOpen={signupModal}>
        <SignUpModal closeSignupModal={handleSignupModal} />
      </Modal>
      <header>
        <div className="header">
          <h1>RedBus</h1>
          <div className="header__credential-container">
            <Button type="button" onClick={handleLoginModal}>
              Login
            </Button>
            <Button type="button" onClick={handleSignupModal}>Sign Up</Button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
