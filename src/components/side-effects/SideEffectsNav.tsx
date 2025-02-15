import { NavLink, Outlet } from "react-router-dom";

export const SideEffectsNav = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/use-effects/examples">Examples</NavLink>
          </li>
          <li>
            <NavLink to="/use-effects/docs">Docs</NavLink>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};
