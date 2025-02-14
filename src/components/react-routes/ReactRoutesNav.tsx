import { NavLink, Outlet } from "react-router-dom";

export const ReactRouterNav = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            {/* Ugly fix as relative path seems to be be buggy  */}
            <NavLink to="/react-router/nested-routes">Nested Routers</NavLink>
          </li>
          <li>
            <NavLink to="/react-router/docs">Docs</NavLink>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};
