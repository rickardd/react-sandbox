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

### Key Points. 
By using Zod, you can create more complex validation schemas, handle custom logic, and provide better error handling and messaging while keeping the markup cleaner.

Need to install resolver \`npm install @hookform/resolvers\`

Example:
Create a scheme
\`\`\`
const schema = z.object({
  username: z.string().min(3, { message: "Username must be at least 3 characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
});
\`\`\`
Add schema to the resolver.
\`\`\`
const {... } = useForm({resolver: zodResolver(schema), });
\`\`\`

### Examples of Zod Validation Rules Not Natively in React Hook Form**

- **Custom Validation Logic**: Use .refine() for custom validation.
- **Union Types**: Validate against multiple schemas with z.union().
- **Intersection Types**: Combine schemas using z.intersection().
- **Default Values**: Set defaults with .default().
- **Transformations**: Transform values using .transform().
- **Nullable and Optional Types**: Use .nullable() and .optional().
- **Literal Types**: Match exact values with z.literal().
- **Enum Validation**: Define enums with z.enum().
- **Array Validation**: Validate arrays with specific types using z.array().
- **Object Shape Validation**: Validate object shapes with z.object().
- **Chaining Validation**: Chain rules with a fluent API style.
- **Error Handling**: Get detailed error messages with schema.parse().

### More

- the schema can be inferred and used in ts - type FormData = z.infer<typeof schema>;
- Keeps validation rules separate which helps for a cleaner markup and better readability.
- Inject zod-schema into the resolver
- The resolver allows integration of external validation libraries such as Zod, Yup, Joi, etc.
`;
