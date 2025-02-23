import { Controller, useForm } from "react-hook-form";
import ReactMarkdown from "react-markdown";

const checkUsernameAvailability = async (username) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const takenUsernames = ["user1", "user2", "admin"];
  return !takenUsernames.includes(username);
};

export const AsynchronousValidation = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "", // Initialize with an empty string to ensure it's controlled
    },
  });

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
  };

  return (
    <>
      <div style={{ maxWidth: "400px", margin: "0 auto", padding: "20px", border: "1px solid #ccc", borderRadius: "5px" }}>
        <h2>Async Validation Form</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="username">Username</label>
            <Controller
              name="username"
              control={control}
              rules={{
                required: "Username is required",
                validate: async (value) => {
                  const isAvailable = await checkUsernameAvailability(value);
                  return isAvailable || "Username is already taken";
                },
              }}
              render={({ field }) => (
                <>
                  <input
                    {...field}
                    id="username"
                    type="text"
                    style={{
                      width: "100%",
                      padding: "8px",
                      margin: "8px 0",
                      border: errors.username ? "1px solid red" : "1px solid #ccc",
                    }}
                  />
                  <small>Type user1, user2, eller admin to invalidate (3 sec delay)</small>
                </>
              )}
            />
            {errors.username && <p style={{ color: "red" }}>{errors.username.message}</p>}
          </div>
          <br />
          <button type="submit" style={{ padding: "10px 15px", backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "5px" }}>
            Submit
          </button>
        </form>
      </div>
      <div style={{ backgroundColor: "#222", color: "#ddd", padding: "2px 24px", marginTop: "24px" }}>
        <ReactMarkdown>{markdownContent}</ReactMarkdown>
      </div>
    </>
  );
};

const markdownContent = `
## Async Validation:

### Key Points

- We can use the validate prop to trigger a validation function
- We simply add async and await 

That's all to make an async validation

\`\`\`
  <Controller
    name="username"
    control={control}
    rules={{
      required: "Username is required",
      validate: async (value) => {
        const isAvailable = await checkUsernameAvailability(value);
        return isAvailable || "Username is already taken";
      },
    }}
  />
\`\`\`
`;
