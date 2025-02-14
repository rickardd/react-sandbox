import { Route, Routes } from "react-router-dom";
import { ReactForm } from "./ReactForm";

export const ReactFormRoutes = () => {
  return (
    <Routes>
      <Route index path="" element={<p>Index</p>} />
      <Route path="simple-form" element={<ReactForm />} />
      <Route path="form-validation" element={<p>ToDo</p>} />
      <Route path="validation-with-zod" element={<p>ToDo</p>} />
      <Route path="dynamic-form-fields" element={<p>ToDo</p>} />
      <Route path="custom-validation" element={<p>ToDo</p>} />
    </Routes>
  );
};
