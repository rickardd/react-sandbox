import { useForm } from "react-hook-form";
import ReactMarkdown from "react-markdown";

export const SimpleForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>React Form</h2>
        <input {...register("field1")} placeholder="Field 1" />
        <button type="submit">Submit</button>
      </form>

      <div style={{ backgroundColor: "#222", color: "#ddd", padding: "2px 24px", marginTop: "24px" }}>
        <ReactMarkdown>{markdownContent}</ReactMarkdown>
      </div>
    </>
  );
};

const markdownContent = `
### Example. 

\`\`\`
  const { register, handleSubmit } = useForm();
\`\`\`

\`\`\`
  <form onSubmit={handleSubmit(onSubmit)}>
    <input {...register("field1")} placeholder="Field 1" />
    <button type="submit">Submit</button>
  </form>
\`\`\`
`;
