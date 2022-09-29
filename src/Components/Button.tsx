import React from "react";
import styles from "./Button.module.scss";

interface IButton {
  text: string;
  disabled?: boolean;
}

export const Button = ({ text, disabled }: IButton) => {
  return (
    <button disabled={disabled} className={styles.customButton}>
      {text}
    </button>
  );
};
