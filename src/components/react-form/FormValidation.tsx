import { useForm } from "react-hook-form";
import ReactMarkdown from "react-markdown";

export const FormValidation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all", // Set validation to trigger on blur
  });

  const onSubmit = (data) => {
    console.log("Form submitted successfully:", data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div>
          <label>Password:</label>
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
            })}
          />
          {errors.password && <span style={{ color: "red" }}>{errors.password.message}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
      <div style={{ backgroundColor: "#222", color: "#ddd", padding: "2px 24px", marginTop: "24px" }}>
        <ReactMarkdown>{markdownContent}</ReactMarkdown>
      </div>
    </>
  );
};

const markdownContent = `
**Mode triggers** - useForm({ mode: "onBlur" })
- **onBlur**: Set validation to trigger on blur
- **onChange** : real-time validation feedback as the user types
- **onSubmit**: validate all fields at once when the user submits the form
- **all**: Validates on blur, submit and on change

**Built in validation rules**
- required: { value: true } - validates that the field is required and not empty.
- minLength: { value: 5 } - validates that the input value meets a minimum length requirement.
- maxLength: { value: 10 } - validates that the input value does not exceed a maximum length.
- pattern: { value: /^[A-Za-z]+$/ } - validates the input value against a regular expression pattern.
- validate: { validateFunction: (value) => value === "example" } - allows for custom validation logic by providing a function that returns a boolean.
- min: { value: 1 } - validates that the input value is greater than or equal to a specified minimum value (typically used for numbers).
- max: { value: 100 } - validates that the input value is less than or equal to a specified maximum value (typically used for numbers).

*Optional*
- Pass in message for customize ut { value: true, message, this field is required }

`;
