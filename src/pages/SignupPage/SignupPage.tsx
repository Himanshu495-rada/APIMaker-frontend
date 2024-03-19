import React, { useState } from "react";
import loginAnimation from "../../assets/welcome_animation.json";
import Lottie from "react-lottie";
import { useNavigate } from "react-router-dom";
import styles from "./SignupPage.module.css";

function SignupPage() {
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
    nav("/login");
  };

  return (
    <div className={styles.signupPage}>
      <Lottie options={defaultOptions} height={150} width={150} />
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <h1 className={styles.title}>Signup</h1>
        <div className={styles.inputContainer}>
          <i className={`bi bi-person-fill ${styles.icon}`} />
          <input
            type="text"
            name="username"
            placeholder="Username"
            className={styles.formInput}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.inputContainer} style={{ marginTop: "20px" }}>
          <i className={`bi bi-key-fill ${styles.icon}`} />
          <input
            type="text"
            name="password"
            placeholder="Password"
            className={styles.formInput}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.inputContainer} style={{ marginTop: "20px" }}>
          <i className={`bi bi-key-fill ${styles.icon}`} />
          <input
            type="text"
            name="password"
            placeholder="Confirm Password"
            className={styles.formInput}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className={styles.signupBtn}>
          Signup
        </button>
      </form>
    </div>
  );
}

export default SignupPage;
