import { NavLink, Route, Routes } from "react-router-dom";
import { Signal } from "./components/Counter";
import FormWithZod from "./components/FormWithZod";
import { PostList } from "./components/PostList";
import Products from "./pages/products/Products";
import Artists from "./pages/artists/Artists";
import SearchBar from "./pages/artists/components/SearchBar";
import ArtistList from "./pages/artists/components/ArtistList";
import { SideEffects } from "./components/side-effects/SideEffects";
import { MemoComponent } from "./components/MemoComponent";
import { PassingData } from "./components/PassingData";
import { Context } from "./components/Context";
import { MemoAndCallbackHooks } from "./components/MemoAndCallbackHooks";
import { StyledComponent } from "./components/StyledComponent";
import { Mui } from "./components/Mui";
import { Emotion } from "./components/Emotion";
import { CssModules } from "./components/css-moduels/CssModules";
import { ReactFormNav } from "./components/react-form/ReactFormNav";
import { ReactFormRoutes } from "./components/react-form/ReactFromRoutes";
import { ReactRouterNav } from "./components/react-routes/ReactRoutesNav";
import { ReactRouterRoutes } from "./components/react-routes/ReactRoutesRoutes";
import "./App.scss";
import "./layout.scss";
import { SideEffectsRoutes } from "./components/side-effects/SideEffectsRoutes";
import { SideEffectsNav } from "./components/side-effects/SideEffectsNav";

const App = () => {
  return (
    <>
      <div className="container">
        <header className="header">
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/react-router">React Router</NavLink>
              </li>
              <li>
                <NavLink to="/react-form">ReactForm</NavLink>
              </li>
              <li>
                <NavLink to="/signal">Signal</NavLink>
              </li>
              <li>
                <NavLink to="/use-effects">useEffects</NavLink>
              </li>
              <li>
                <NavLink to="/react-useMemo-useCallback">useMemo and useCallback</NavLink>
              </li>
              <li>
                <NavLink to="/react-memo">memo</NavLink>
              </li>
              <li>
                <NavLink to="/use-context">useContext</NavLink>
              </li>
              <li>
                <NavLink to="/zod">Zod</NavLink>
              </li>
              <li>
                <NavLink to="/react-query">React Query</NavLink>
              </li>
              <li>
                <NavLink to="/products">Products</NavLink>
              </li>
              <li>
                <NavLink to="/artists">Artists</NavLink>
              </li>
              <li>
                <NavLink to="/passing-data">Passing data between components</NavLink>
              </li>
              <li>
                <NavLink to="/styled-component">Styled component</NavLink>
              </li>
              <li>
                <NavLink to="/mui">MUI</NavLink>
              </li>
              <li>
                <NavLink to="/emotion">Emotion</NavLink>
              </li>
              <li>
                <NavLink to="/css-modules">CSS modules</NavLink>
              </li>
              <li>
                <NavLink to="/">Docker</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <nav className="sidebar">
          <Routes>
            <Route path="/" element={<p>This is the root path</p>} />
            <Route path="/react-form/*" element={<ReactFormNav />} />
            <Route path="/use-effects/*" element={<SideEffectsNav />} />
            <Route path="/react-router/*" element={<ReactRouterNav />}>
              <Route path="test1" element={<p>Test 1</p>} />
              <Route path="test2" element={<p>Test 2</p>} />
            </Route>
            <Route path="*" element={<p>Not found</p>} />
          </Routes>
        </nav>
        <main className="content">
          <Routes>
            <Route path="/" element={<p>This is the root path</p>} />
            <Route path="/use-effects/*" element={<SideEffectsRoutes />} />
            <Route path="/react-router/*" element={<ReactRouterRoutes />} />
            <Route path="/react-form/*" element={<ReactFormRoutes />}>
              {/* <Route path="*" element={<ReactFormRoutes />} /> */}
            </Route>
            <Route path="/signal" element={<Signal />} />
            <Route path="/use-memo" element={<MemoComponent />} />
            <Route path="/react-useMemo-useCallback" element={<MemoAndCallbackHooks />} />
            <Route path="/use-context" element={<Context />} />
            <Route path="/zod" element={<p>Zod</p>} />
            <Route path="/react-query" element={<PostList />} />
            <Route path="/products" element={<Products />} />
            <Route path="/artists" element={<Artists />}>
              <Route path="" element={<SearchBar />} />
              <Route path="primary-artists" element={<ArtistList />} />
            </Route>
            <Route path="passing-data" element={<PassingData />} />
            <Route path="styled-component" element={<StyledComponent />} />
            <Route path="mui" element={<Mui />} />
            <Route path="emotion" element={<Emotion />} />
            <Route path="css-modules" element={<CssModules />} />
            <Route path="*" element={<p>Not found</p>} />
          </Routes>
        </main>
      </div>
    </>
  );
};

export default App;
