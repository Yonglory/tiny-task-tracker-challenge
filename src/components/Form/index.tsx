import * as React from "react";

type FormProps = {
  handleSubmit: Function;
  children: React.ReactNode;
};

const Form = ({ handleSubmit, children }: FormProps) => {
  return (
    <form
      onSubmit={(e) => {
        e.persist();
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const data = new FormData(form);
        handleSubmit(data);
      }}
    >
      {children}
    </form>
  );
};

export default Form;
