import { Link, Route, Routes } from "react-router-dom";
import { FormOne } from "./components/FormOne";
import { FormTwo } from "./components/FormTwo";
import { FormThree } from "./components/FormThree";

const App = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Form One</Link>
          </li>
          <li>
            <Link to="/f2">Form Two</Link>
          </li>
          <li>
            <Link to="/f3">Form Three</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<FormOne />} />
        <Route path="/f2" element={<FormTwo />} />
        <Route path="/f3" element={<FormThree />} />
      </Routes>
    </>
  );
};

export default App;
