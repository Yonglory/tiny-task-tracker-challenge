import * as React from "react";
import styles from "./input.module.scss";

type InputProps = {
  id: string;
  label: string;
};

const Input = ({ id, label }: InputProps) => {
  return (
    <div className={styles["input-field"]}>
      <label className={styles.label}>{label}</label>
      <input id={id} name={id} className={styles.input} type="text" />
    </div>
  );
};

export default Input;
