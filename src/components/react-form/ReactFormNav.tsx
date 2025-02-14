import { NavLink, Outlet } from "react-router-dom";

export const ReactFormNav = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/react-form/simple-form">Simple Form</NavLink>
          </li>
          <li>
            <NavLink to="/react-form/form-validation">Form Validation</NavLink>
          </li>
          <li>
            <NavLink to="/react-form/validation-with-zod">Validation with zod</NavLink>
          </li>
          <li>
            <NavLink to="/react-form/dynamic-form-fields">Dynamic Form Fields</NavLink>
          </li>
          <li>
            <NavLink to="/react-form/custom-validation">Custom Validation</NavLink>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};
