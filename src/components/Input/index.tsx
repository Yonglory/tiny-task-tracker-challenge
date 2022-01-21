import * as React from "react";
import styles from "./input.module.scss";

type InputProps = {
  id: string;
  label: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

const Input = ({ id, label, onChange }: InputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (typeof onChange === "function") {
      onChange(e);
    }
  }
  return (
    <div className={styles["input-field"]}>
      <label className={styles.label}>{label}</label>
      <input id={id} name={id} className={styles.input} type="text" onChange={handleChange}/>
    </div>
  );
};

export default Input;
