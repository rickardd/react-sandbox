import { Route, Routes } from "react-router-dom";
import { SideEffects } from "./SideEffects";
import { SideEffectsDocs } from "./SideEffectsDocs";

export const SideEffectsRoutes = () => {
  return (
    <Routes>
      <Route index path="" element={<p>Index</p>} />
      <Route path="examples" element={<SideEffects />} />
      <Route path="docs" element={<SideEffectsDocs />} />
    </Routes>
  );
};
