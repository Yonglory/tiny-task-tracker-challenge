import * as React from "react";
import styles from "./confirmation.module.scss";
type ConfirmationProps = {
  message: string;
};

const Confirmation = ({ message }: ConfirmationProps) => {
  return <div className={styles.confirmation}>{message}</div>;
};

export default Confirmation;
