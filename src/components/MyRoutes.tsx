import { Routes, Route, Link, Outlet, useParams, useLocation } from "react-router-dom";

export const MyRoutes = () => {
  return (
    <div>
      <p>!!!(Issue, the url string just adds up. Find the proper way to render child routes)</p>

      <h3>Routes defined in child component</h3>
      <nav>
        <ul>
          <li>
            <Link to="overview/123">Overview</Link>
          </li>
          <li>
            <Link to="settings?theme=dark">Settings</Link>
          </li>
          <li>
            <Link to="profile">Profile</Link>
          </li>
        </ul>
      </nav>

      <Outlet />

      <Routes>
        <Route path="overview/:id" element={<Overview />} />
        <Route path="settings" element={<Settings />} />
        <Route path="profile" element={<Profile data={{ info: "Passed along component prop data" }} />} />
      </Routes>
    </div>
  );
};

const Overview = () => {
  const { id } = useParams();

  console.log("overview");

  return <p>Param ID: {id}</p>;
};
const Settings = () => {
  const query = new URLSearchParams(useLocation().search);
  const theme = query.get("theme"); // Get the query parameter

  return <p>Settings Page - Theme: {theme}</p>;
};
const Profile = ({ data }) => {
  return <p>{data.info}</p>;
};
