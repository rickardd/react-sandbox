import { NavLink, Outlet } from "react-router-dom";

export const ReactQueryNav = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/react-query/basic-data-fetching">basic-data-fetching</NavLink>
          </li>
          <li>
            <NavLink to="/react-query/combining-with-state-management">combining-with-state-management</NavLink>
          </li>
          <li>
            <NavLink to="/react-query/creating-custom-hooks">creating-custom-hooks</NavLink>
          </li>
          <li>
            <NavLink to="/react-query/custom-query-functions">custom-query-functions</NavLink>
          </li>
          <li>
            <NavLink to="/react-query/dynamic-queries">dynamic-queries</NavLink>
          </li>
          <li>
            <NavLink to="/react-query/error-handling">error-handling</NavLink>
          </li>
          <li>
            <NavLink to="/react-query/handling-loading-and-error-states">handling-loading-and-error-states</NavLink>
          </li>
          <li>
            <NavLink to="/react-query/hydration-for-ssr">hydration-for-ssr</NavLink>
          </li>
          <li>
            <NavLink to="/react-query/infinite-scrolling">infinite-scrolling</NavLink>
          </li>
          <li>
            <NavLink to="/react-query/integration-with-axios">integration-with-axios</NavLink>
          </li>
          <li>
            <NavLink to="/react-query/mutations">mutations</NavLink>
          </li>
          <li>
            <NavLink to="/react-query/optimistic-updates">optimistic-updates</NavLink>
          </li>
          <li>
            <NavLink to="/react-query/pagination">pagination</NavLink>
          </li>
          <li>
            <NavLink to="/react-query/performance-optimization">performance-optimization</NavLink>
          </li>
          <li>
            <NavLink to="/react-query/query-caching">query-caching</NavLink>
          </li>
          <li>
            <NavLink to="/react-query/query-invalidation">query-invalidation</NavLink>
          </li>
          <li>
            <NavLink to="/react-query/react-query-dev-tools">react-query-dev-tools</NavLink>
          </li>
          <li>
            <NavLink to="/react-query/using-typescript">using-typescript</NavLink>
          </li>

          <Outlet />
        </ul>
      </nav>
    </>
  );
};
