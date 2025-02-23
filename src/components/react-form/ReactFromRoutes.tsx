import { Route, Routes } from "react-router-dom";
import { SimpleForm } from "./SimpleForm";
import { FormValidationWithZod } from "./FormValidationWithZod";
import { FormValidation } from "./FormValidation";
import { DynamicFormFields } from "./DynamicFormFields";
import { CustomValidation } from "./CustomValidation";
import { ComplexCustomValidation } from "./ComplexCustomValidation";
import { AsynchronousValidation } from "./AsynchronousValidation";
import { ConditionalValidation } from "./ConditionalValidation";
import { DefaultValues } from "./DefaultValues";
import { Revalidation } from "./Revalidation";
import { UiLibraryIntegration } from "./UiLibraryIntegration";
import { ControlledVsUncontrolled } from "./ControlledVsUncontrolled";

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
      <Route path="conditional-validation" element={<ConditionalValidation />} />
      <Route path="ui-library-integration" element={<UiLibraryIntegration />} />
      <Route path="controlled-vs-uncontrolled" element={<ControlledVsUncontrolled />} />
      <Route path="default-values" element={<DefaultValues />} />
      <Route path="asynchronous-validation" element={<AsynchronousValidation />} />
    </Routes>
  );
};
