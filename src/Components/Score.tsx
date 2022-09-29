import React from "react";
import { IScore } from "../App";
import Styles from "./Score.module.scss";

const Score = ({ you, pc }: IScore) => {
  return (
    <section className={Styles.score}>
      <p>
        {you}
        <span>YOU</span>
      </p>
      <p>X</p>
      <p>
        {pc}
        <span>PC</span>
      </p>
    </section>
  );
};

//Score.propTypes = {};

export default Score;
