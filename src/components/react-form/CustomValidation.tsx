import { useForm } from "react-hook-form";
import ReactMarkdown from "react-markdown";

export const CustomValidation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }, // make comment on this
  } = useForm({
    mode: "onBlur", // Set validation to trigger on blur
  });

  const onSubmit = (data) => {
    console.log("Form submitted successfully:", data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div>
          <label>Email:</label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email format",
              },
            })}
          />
          {errors.email && <span style={{ color: "red" }}>{errors.email.message}</span>}
        </div>
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
      <div style={{ backgroundColor: "#222", color: "#ddd", padding: "2px 24px" }}>
        <ReactMarkdown>{markdownContent}</ReactMarkdown>
      </div>
    </>
  );
};

const markdownContent = `
- Add html attribute novalidate to <form novalidate> to prevent browser validation
- register takes two arguments name and validation-object. registar(name, validation)
- The validation object has the property pattern in which we can write regular expressions for e.g email and phone numbers
  - {pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email format", },}
- 
`;
