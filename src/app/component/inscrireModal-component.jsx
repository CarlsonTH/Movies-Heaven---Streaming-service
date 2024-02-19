import React, { useState } from "react";
import Modal from "react-modal";
import img_online from "../../../public/img_online.png";
import axios from "axios";

const CreateModal = ({ onClose, isOpen, onUserCreated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [backendError, setBackendError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleCreate = () => {
    //validation
    if (
      !email ||
      !password ||
      !confirmPassword ||
      password !== confirmPassword ||
      !validateEmail(email)
    ) {
      setBackendError(true);
      setErrorMessage("Please provide valid email or matching passwords.");
      return;
    }

    const userData = {
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };

    axios({
      method: "post",
      url: "http://localhost:8888/ProjetBack_end/ServletUserInfo/createUser",
      data: userData,
    })
      .then((response) => {
        if (response.status === 200) {
          onUserCreated();
          onClose();
        } else {
          setBackendError(true);
          setErrorMessage(response.data);
        }
      })
      .catch((error) => {
        setBackendError(true);
        setErrorMessage("Duplicate email");
      });
  };

  const closeErrorModal = () => {
    setBackendError(false);
  };

  return (
    <Modal
      className="modal"
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Create Account Modal"
    >
      <h1 onClick={onClose}>X</h1>
      <div class="modal-content">
        <div class="img-content">
          <div class="image-modal">
            <img src={img_online.src} alt="Online" />
          </div>
          <div className="content">
            <h2>USER CREATE ACCOUNT</h2>
            <input
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {backendError && (
              <div className="modal-ERROR">
                <p className="error-message">{errorMessage}</p>
                <button onClick={closeErrorModal}>OK</button>
              </div>
            )}
            <div class="modal-BTN">
              <button class="create-BTN" onClick={handleCreate}>
                CREATE ID
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CreateModal;
