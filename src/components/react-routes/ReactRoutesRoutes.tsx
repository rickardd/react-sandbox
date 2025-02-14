import { Route, Routes } from "react-router-dom";
import { ReactRouterDocs } from "./ReactRouterDocs";
import { NestedRoutes } from "./NestedRoutes";

export const ReactRouterRoutes = () => {
  return (
    <Routes>
      <Route index path="" element={<p>Index</p>} />
      <Route path="nested-routes" element={<NestedRoutes />} />
      <Route path="docs" element={<ReactRouterDocs />} />
    </Routes>
  );
};
