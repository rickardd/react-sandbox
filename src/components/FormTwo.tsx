import React from "react";
import { useForm } from "react-hook-form";

export const FormTwo = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Form Two</h2>
      <input {...register("field2")} placeholder="Field 2" />
      <button type="submit">Submit</button>
    </form>
  );
};
