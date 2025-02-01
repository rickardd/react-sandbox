import { BrowserRouter as Router, Route, Routes, Link, Outlet } from "react-router-dom";
import "./Artists.css";
// import SearchBar from "./components/SearchBar";
// import ArtistList from "./components/ArtistList";

const Artists = () => {
  return (
    // As router is defined in App.tsx we cannot have it here too <Router>
    <div>
      <Link to="/artists">Home</Link>

      {/* <Routes> */}
      {/* <Route path="/" element={<SearchBar />} />
      <Route path="/primary-artists" element={<ArtistList />} /> */}
      {/* </Routes> */}

      <Outlet />
    </div>
    // </Router>
  );
};

export default Artists;
