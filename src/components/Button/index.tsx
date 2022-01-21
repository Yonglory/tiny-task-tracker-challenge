import * as React from "react";
import styles from "./button.module.scss";

export enum Kinds {
  primary = "primary",
  outline = "outline"
}

type ButtonProps = {
  children: React.ReactNode | React.ReactNodeArray;
  kind: Kinds;
};

const Button = ({ kind, children }: ButtonProps) => {
  return (
    <button
      type="submit"
      className={`${styles.button} ${styles[kind || "primary"]}`}
    >
      {children}
    </button>
  );
};

export default Button;
