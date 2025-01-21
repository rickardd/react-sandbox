import React from "react";
import { useForm } from "react-hook-form";

export const FormOne = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Form One</h2>
      <input {...register("field1")} placeholder="Field 1" />
      <button type="submit">Submit</button>
    </form>
  );
};
