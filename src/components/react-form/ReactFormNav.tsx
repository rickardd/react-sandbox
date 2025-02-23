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
            <NavLink to="/react-form/custom-validation">Custom Validation</NavLink>
          </li>
          <li>
            <NavLink to="/react-form/complex-form-validation">Multiple Custom Form Validation</NavLink>
          </li>
          <li>
            <NavLink to="/react-form/validation-with-zod">Validation with zod</NavLink>
          </li>
          <li>
            <NavLink to="/react-form/dynamic-form-fields">Dynamic Form Fields</NavLink>
          </li>
          <li>
            <NavLink to="/react-form/conditional-validation">ToDo: Conditional Validation</NavLink>
          </li>
          <li>
            <NavLink to="/react-form/ui-library-integration">Integration with UI Libraries</NavLink>
          </li>
          <li>
            <NavLink to="/react-form/controlled-vs-uncontrolled">ToDo: Controlled Vs Uncontrolled inputs</NavLink>
          </li>
          <li>
            <NavLink to="/react-form/default-values">ToDo: Default Values</NavLink>
          </li>
          <li>
            <NavLink to="/react-form/asynchronous-validation">Asynchronous Validation</NavLink>
          </li>

          <Outlet />
        </ul>
      </nav>
    </>
  );
};
