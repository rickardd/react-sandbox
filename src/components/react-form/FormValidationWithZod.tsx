import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ReactMarkdown from "react-markdown";

const schema = z.object({
  username: z.string().min(3, { message: "Username must be at least 3 characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
});

export const FormValidationWithZod = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Username:</label>
          <input {...register("username")} />
          {errors.username && <p>{errors.username.message}</p>}
        </div>
        <div>
          <label>Email:</label>
          <input {...register("email")} />
          {errors.email && <p>{errors.email.message}</p>}
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
- npm install @hookform/resolvers
- the schema can be inferred and used in ts - type FormData = z.infer<typeof schema>;
- Keeps validation rules separate which helps for a cleaner markup and better readability.
`;
