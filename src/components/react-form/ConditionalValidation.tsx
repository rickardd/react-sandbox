import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const GUARDIAN_NAME = "guardianName";
const GUARDIAN_ERROR = "Guardian's name is required if under 18";

export const ConditionalValidationNoZod = () => {
  const {
    register,
    handleSubmit,
    clearErrors,
    setError,
    watch,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  // Watch the age field to apply conditional validation
  const age = watch("age");
  const guardianName = watch(GUARDIAN_NAME);

  const isUnder18 = () => age < 18;

  // Centralized validation logic
  const validateGuardianName = () => {
    if (isUnder18()) {
      if (guardianName === "") {
        setError(GUARDIAN_NAME, {
          type: "manual",
          message: GUARDIAN_ERROR,
        });
      }
    } else {
      clearErrors(GUARDIAN_NAME);
    }
  };

  useEffect(() => {
    validateGuardianName(); // Call the centralized validation function
  }, [age, guardianName, clearErrors, setError]);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Age:</label>
        <input type="number" {...register("age", { required: "Age is required", min: { value: 0, message: "Age must be a positive number" } })} />
        {errors.age && <p style={{ color: "red" }}>{errors.age.message}</p>}
      </div>

      <div>
        <label>Guardian's Name:</label>
        <input
          {...register(GUARDIAN_NAME, {
            required: age < 18 ? GUARDIAN_ERROR : false,
          })}
        />
        {errors.guardianName && <p style={{ color: "red" }}>{errors.guardianName.message}</p>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

// --- ZOD example

// Conditional logic with refine on the object like z.object(...).refine(...)
const schema = z
  .object({
    age: z
      .string()
      .refine((val) => !isNaN(val), { message: "Age is not a number" })
      .refine((val) => Number(val) > 0, { message: "Age must be a positive number" }),
    guardianName: z.string().optional(),
  })
  // Conditional logic
  .refine(
    (data) => {
      const age = Number(data.age);

      const isUnder18 = age < 18;

      if (isUnder18) {
        if (data.guardianName === "") {
          console.log("Invalid", data);

          return false; // Invalid
        }
      }

      return true; // Valid
    },
    {
      message: GUARDIAN_ERROR,
      path: ["guardianName"], // Specify the path to the field that has the error
    }
  );

export const ConditionalValidationZod = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const age = watch("age");

  console.log(age);

  // Super easy to test like this
  // console.log(schema.parse({ age: "17", guardianName: "" })); // Invalid - 2 errors
  // console.log(schema.parse({ age: "17", guardianName: "a" })); // Valid
  // console.log(schema.parse({ age: "19", guardianName: "" })); // Invalid - 1 error

  console.log(errors);
  console.log(schema);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Age:</label>
        <input type="number" {...register("age")} />
        {errors.age && <p style={{ color: "red" }}>{errors.age.message}</p>}
      </div>

      <div>
        <label>Guardian's Name:</label>
        <input {...register("guardianName")} />
        {errors.guardianName && <p style={{ color: "red" }}>{errors.guardianName.message}</p>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export const ConditionalValidation = () => {
  return (
    <>
      <h3>Conditional fields</h3>
      {/* <ConditionalValidationNoZod /> */}
      <hr />

      <h3>Conditional fields with Zod</h3>
      <ConditionalValidationZod />
    </>
  );
};

// ToDO: Zod gotchas
// - transform can be use to e.g converts a string to a number.
// - When we transform a ZodString to a number, the resulting type is wrapped in a ZodEffects type.
//   - Meaning, max() and min() wont work after transform
//   - One option is to use refine() after transform
// - Confusing return booleans: true = valid and false = invalid.
//   - false triggers error
//   - true, passed validation
//   - What is confusing here is that we need to negate values e.g !isOver18 if we want to error on is over 18.
