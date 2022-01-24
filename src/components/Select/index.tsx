import * as React from "react";
import styles from "./select.module.scss";

interface Members {
  id: number;
  name: string;
}
type InputProps = {
  id: string;
  label: string;
  members: Array<Members>;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
};

const Input = ({ id, label, members, onChange }: InputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (typeof onChange === "function") {
      onChange(e);
    }
  }
  return (
    <div className={styles["select-field"]}>
      <label className={styles.label}>{label}</label>
      <select id={id} name={id} className={styles.select} onChange={handleChange}>
        <option className={styles.default} selected disabled>Select...</option>
      {members &&
            members.map(({ id, name }) => (
              <option value={name} key={id}>{name}</option>
            ))}
        </select>
    </div>
  );
};

export default Input;