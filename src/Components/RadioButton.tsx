import React, { useEffect, useState } from "react";
import styles from "./RadioButton.module.scss";

interface IRadio {
  item: string;
  id: string;
  setValue: (value: string) => void;
  disable: boolean;
  answer: string;
}

export const Radio = ({ item, id, setValue, disable, answer }: IRadio) => {
  function handdleChange() {
    setValue(item);
  }
  return (
    <label htmlFor={id} className={styles.customRadio}>
      <input
        type="radio"
        name="fav_language"
        id={id}
        value={item}
        checked={answer == item ? true : false}
        onChange={handdleChange}
        disabled={disable}
      />
      <p>{item}</p>
    </label>
  );
};
