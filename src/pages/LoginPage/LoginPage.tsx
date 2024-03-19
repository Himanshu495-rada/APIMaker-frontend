import React, { useState } from "react";
import styles from "./LoginPage.module.css";
import loginAnimation from "../../assets/welcome_animation.json";
import Lottie from "react-lottie";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loginAnimation,
  };
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const nav = useNavigate();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form data", formData);
    if (formData.username == "admin" && formData.password == "admin")
      nav("/dashboard");
  };

  return (
    <div className={styles.loginPage}>
      <Lottie options={defaultOptions} height={150} width={150} />
      <form onSubmit={handleSubmit}>
        <div className={styles.formContainer}>
          <h1 className={styles.title}>Login</h1>
          <div className={styles.inputContainer}>
            <i className={`bi bi-person-fill ${styles.personIcon}`} />
            <input
              type="text"
              name="username"
              placeholder="Username"
              className={styles.formInput}
              onChange={handleInputChange}
            />
          </div>
          <div className={styles.inputContainer} style={{ marginTop: "20px" }}>
            <i className={`bi bi-key-fill ${styles.keyIcon}`} />
            <input
              type="text"
              name="password"
              placeholder="Password"
              className={styles.formInput}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" className={styles.loginBtn}>
            Login
          </button>
          <p className={styles.forgotBtn}>Forgot Password</p>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
