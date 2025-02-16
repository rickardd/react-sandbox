import { Route, Routes } from "react-router-dom";
import { SimpleForm } from "./SimpleForm";
import { FormValidationWithZod } from "./FormValidationWithZod";
import { FormValidation } from "./FormValidation";
import { DynamicFormFields } from "./DynamicFormFields";
import { CustomValidation } from "./CustomValidation";
import { ComplexCustomValidation } from "./ComplexCustomValidation";

export const ReactFormRoutes = () => {
  return (
    <Routes>
      <Route index path="" element={<p>Index</p>} />
      <Route path="simple-form" element={<SimpleForm />} />
      <Route path="form-validation" element={<FormValidation />} />
      <Route path="complex-form-validation" element={<ComplexCustomValidation />} />
      <Route path="validation-with-zod" element={<FormValidationWithZod />} />
      <Route path="dynamic-form-fields" element={<DynamicFormFields />} />
      <Route path="custom-validation" element={<CustomValidation />} />
    </Routes>
  );
};
