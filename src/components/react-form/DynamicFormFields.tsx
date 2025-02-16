import { useForm } from "react-hook-form";

export const DynamicFormFields = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>React Form</h2>
      <input {...register("field1")} placeholder="Field 1" />
      <button type="submit">Submit</button>
    </form>
  );
};
