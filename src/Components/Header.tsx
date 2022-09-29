import React from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
    </header>
  );
};
