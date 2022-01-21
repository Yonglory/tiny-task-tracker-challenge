import * as React from "react";
import styles from "./select.module.scss";

type InputProps = {
  id: string;
  label: string;
};

const Input = ({ id, label }: InputProps) => {
  return (
    <div className={styles["select-field"]}>
      <label className={styles.label}>{label}</label>
      <select id={id} name={id} className={styles.select}>
        <option value="">Select...</option>
        <option value="test">test</option>
        <option value="test">test</option>
        </select>
    </div>
  );
};

export default Input;
