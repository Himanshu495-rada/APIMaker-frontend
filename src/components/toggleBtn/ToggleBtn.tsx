import React, { useState } from "react";
import styles from "./ToggleBtn.module.css";

interface ToggleBtnProps {
  options: string[];
}

const ToggleBtn: React.FC<ToggleBtnProps> = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState<string>(options[0]);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div className={styles.toggleButton}>
      {options.map((option) => (
        <div
          key={option}
          className={`${styles.option} ${
            selectedOption === option ? styles.selected : ""
          }`}
          onClick={() => handleOptionClick(option)}
        >
          {option}
        </div>
      ))}
      <div
        className={`${styles.highlight} ${
          selectedOption === options[1] ? styles.right : ""
        }`}
      />
    </div>
  );
};

export default ToggleBtn;
