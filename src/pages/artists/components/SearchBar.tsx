import { useState } from "react";
import { useStore } from "../store/useStore";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const fetchProducts = useStore((state) => state.fetchProducts);

  const onChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchProducts(inputValue);
    navigate("primary-artists"); // could be a constant
  };

  return (
    <form className="card">
      <div>
        <h2>Add primary artist</h2>
      </div>
      <div className="mb-12">
        <input type="text" className="input-field" placeholder="Artist name" value={inputValue} onChange={onChange} />
      </div>
      <div className="flex justify-end">
        <button type="submit" className="button" onClick={handleSubmit}>
          Next
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
