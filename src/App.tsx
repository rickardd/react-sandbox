import { Link, Route, Routes } from "react-router-dom";
import { FormOne } from "./components/FormOne";
import { FormTwo } from "./components/FormTwo";
import { FormThree } from "./components/FormThree";
import { Signal } from "./components/Counter";
import FormWithZod from "./components/FormWithZod";
import { PostList } from "./components/PostList";
import Products from "./pages/products/Products";
import Artists from "./pages/artists/Artists";
import SearchBar from "./pages/artists/components/SearchBar";
import ArtistList from "./pages/artists/components/ArtistList";

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
          <li>
            <Link to="/signal">Signal</Link>
          </li>
          <li>
            <Link to="/zod">Zod</Link>
          </li>
          <li>
            <Link to="/react-query">React Query</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/artists">Artists</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<FormOne />} />
        <Route path="/f2" element={<FormTwo />} />
        <Route path="/f3" element={<FormThree />} />
        <Route path="/signal" element={<Signal />} />
        <Route path="/zod" element={<FormWithZod />} />
        <Route path="/react-query" element={<PostList />} />
        <Route path="/products" element={<Products />} />
        <Route path="/artists" element={<Artists />}>
          <Route path="" element={<SearchBar />} />
          <Route path="primary-artists" element={<ArtistList />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
