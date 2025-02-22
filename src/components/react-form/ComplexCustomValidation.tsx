import { useForm } from "react-hook-form";
import ReactMarkdown from "react-markdown";

export const ComplexCustomValidation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form submitted successfully:", data);
  };

  const validateEmailOrPhone = (value) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\+?[1-9]\d{1,14}$/;
    if (!value) {
      return "This field is required";
    }
    if (!emailPattern.test(value) && !phonePattern.test(value)) {
      return "Please enter a valid email or phone number";
    }
    return true;
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div>
          <label>Email or Phone:</label>
          <input
            type="text"
            {...register("contact", {
              validate: validateEmailOrPhone,
            })}
          />
          {errors.contact && <span style={{ color: "red" }}>{errors.contact.message}</span>}
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

### Key Points. 

The validation object has a **validate** property where we can use a function for more complex validation. 
In this example we have 1 input field that validates both phone number and email.

\`\`\`

const validateEmailOrPhone = (value) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\+?[1-9]\d{1,14}$/;
    if (!value) {
      return "This field is required";
    }
    if (!emailPattern.test(value) && !phonePattern.test(value)) {
      return "Please enter a valid email or phone number";
    }
    return true;
  };

// ...
...register("contact", {
  validate: validateEmailOrPhone,
})
\`\`\`


- This input field validates both email and phone number 
- For this we need 2 custom validations.
- One solution is to create a function that returns either true or an error message based on the regex
- Note the !value check in the function
- Validate can be a function that returns either true or an error message
- Maybe this would be more simple if we used zod... maybe using union
`;
