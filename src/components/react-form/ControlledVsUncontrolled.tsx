import ReactMarkdown from "react-markdown";

export const ControlledVsUncontrolled = () => {
  return (
    <>
      <div style={{ backgroundColor: "#222", color: "#ddd", padding: "2px 24px", marginTop: "24px" }}>
        <ReactMarkdown>{markdownContent}</ReactMarkdown>
      </div>
    </>
  );
};

const markdownContent = `
### Controlled vs UnControlled inputs

- uncontrolled e.g ref or ...register()
- uncontrolled e.g controller and control

\`\`\`
  
\`\`\`

`;
