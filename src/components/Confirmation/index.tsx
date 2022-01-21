import * as React from "react";

type ConfirmationProps = {
  message: string;
};

const Confirmation = ({ message }: ConfirmationProps) => {
  return <div>{message}</div>;
};

export default Confirmation;
