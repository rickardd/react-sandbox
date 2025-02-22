import { useForm, useFieldArray } from "react-hook-form";
import ReactMarkdown from "react-markdown";

export const DynamicFormFields = () => {
  const { register, control, handleSubmit } = useForm({
    defaultValues: {
      hobbies: [{ name: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "hobbies",
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Dynamic Hobbies Form</h2>
        {fields.map((field, index) => (
          <div key={field.id} style={{ marginBottom: "10px" }}>
            <input {...register(`hobbies.${index}.name`)} placeholder={`Hobby #${index + 1}`} />
            <button type="button" onClick={() => remove(index)}>
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={() => append({ name: "" })}>
          Add Hobby
        </button>
        <button type="submit">Submit</button>
      </form>
      <div style={{ backgroundColor: "#222", color: "#ddd", padding: "2px 24px", marginTop: "24px" }}>
        <ReactMarkdown>{markdownContent}</ReactMarkdown>
      </div>
    </>
  );
};

const markdownContent = `
### Key Points
- To build a dynamic form we need a control from useForm() and fields and functions from useFieldArray()

### Demo
- See this [demo](https://codesandbox.io/p/sandbox/react-hook-form-usefieldarray-ssugn) for more features.

### useFieldArray
- Allows you to manage an array of fields dynamically. 

\`\`\`
const {
  fields,    // Array of field objects, e.g., [{ id: '1', name: 'test.0.name' }]
  append,    // append(newField: { name: string }) e.g., append({ name: 'New Skill' })
  prepend,   // prepend(newField: { name: string }) e.g., prepend({ name: 'First Skill' })
  remove,    // remove(index: number) - Removes a field at the specified index, e.g., remove(0)
  swap,      // swap(indexA: number, indexB: number) - Swaps fields at the two specified indices, e.g., swap(0, 5)
  move,      // move(fromIndex: number, toIndex: number) - Moves a field from one index to another, e.g., move(1, 4)
  insert,    // insert(index: number, newField: { name: string }) - Inserts a new field at the specified index, e.g., insert(1, { name: 'Inserted Skill' })
  replace    // replace(newFields: Array<{ name: string }>) - Replaces all fields with a new array of fields, e.g., replace([{ name: 'Skill A' }, { name: 'Skill B' }])
} = useFieldArray({
  control,   // The control object from useForm, necessary for managing the state of the fields.
  name: "test" // The name of the field array, used to identify the array in the form state.
});
\`\`\`

### control
  - It serves as a bridge between the form state and the various input components, especially when using features like useFieldArray, Controller, or custom components.
  - The control object contains methods and properties that help manage the form's state and behavior.
  - Manage the registration and state of form fields, especially when you have dynamic fields (like arrays of inputs).
  - Register/unregister fields, and manage their values.
  - With useFieldArray, we pass the control object to it to allow useFieldArray to manage the array of fields

### Other
- {...register(hobbies.index.name)} - Each input needs a unique name (standard HTML practice)

`;
