import { Controller, useForm } from "react-hook-form"; // Import useForm from react-hook-form
import { TextField, Button, Container, Typography } from "@mui/material"; // Import MUI components
import ReactMarkdown from "react-markdown";

const SimpleForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Log the form data to the console
  };

  return (
    <Container maxWidth="sm">
      {" "}
      <Typography variant="h4" gutterBottom>
        {" "}
        Simple Form
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        {" "}
        <TextField
          label="Name" // Label for the input field
          fullWidth // Make the input field take full width
          margin="normal" // Add normal margin
          {...register("name", { required: "Name is required" })} // Register the input with react-hook-form
          error={!!errors.name} // Check if there's an error for this field
          helperText={errors.name ? errors.name.message : ""} // Display error message if exists
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Container>
  );
};

const SimpleFormWithController = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Simple Form
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="name"
          control={control} // Control object from useForm
          defaultValue=""
          rules={{ required: "Name is required" }}
          render={(
            { field } // Render prop to render the input
          ) => (
            <TextField
              {...field} // Spread the field props to the TextField
              label="Name"
              fullWidth
              margin="normal"
              error={!!errors.name} // Check if there's an error for this field
              helperText={errors.name ? errors.name.message : ""} // Display error message if exists
            />
          )}
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Container>
  );
};

export const UiLibraryIntegration = () => {
  return (
    <>
      <h3>Using MUI without controller (less preferred option)</h3>
      <SimpleForm />

      <h3>Using MUI with controller (preferred option)</h3>
      <SimpleFormWithController />

      <div style={{ backgroundColor: "#222", color: "#ddd", padding: "2px 24px", marginTop: "24px" }}>
        <ReactMarkdown>{markdownContent}</ReactMarkdown>
      </div>
    </>
  );
};

// using the Controller component from react-hook-form can be beneficial, especially when working with controlled components like Material-UI's TextField. The Controller allows you to manage the state of the input fields more effectively and provides a cleaner way to integrate with third-party UI libraries.

const markdownContent = `
### Example. 

\`\`\`
import { Controller, useForm } from "react-hook-form";
\`\`\`

\`\`\`
const { control, formState: { errors } } = useForm();
\`\`\`

\`\`\`
<Controller 
  name="my-unique-name"
  control={control} 
  render={( { field } ) => ( <TextField {...field} /> )} 
/>
\`\`\`

**Control:** 
- Acts as a bridge between the form inputs and the form state.
- Holds the methods and state needed to manage the form, including 
  - tracking the values of the inputs, 
  - handling validation
  - managing submission.


**Controller:**
- Wrapper for individual form inputs (e.g TextField). 
- Requires name and control props to bind the form states and method to the input field. 
- In the render function we can add our input and modify it as we prealse
`;
