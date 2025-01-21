import React from "react";
import { useForm } from "react-hook-form";

export const FormThree = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Form Three</h2>
      <input {...register("field3")} placeholder="Field 3" />
      <button type="submit">Submit</button>
    </form>
  );
};
