import * as React from "react";
import styles from "./button.module.scss";

export enum Kinds {
  primary = "primary",
  outline = "outline"
}

type ButtonProps = {
  children: React.ReactNode | React.ReactNodeArray;
  kind: Kinds;
  disabled: boolean;
};

const Button = ({ kind, children, disabled }: ButtonProps) => {
  return (
    <button
      type="submit"
      className={`${styles.button} ${styles[kind]}`}
      disabled = {disabled}
    >
      {children}
    </button>
  );
};

export default Button;
