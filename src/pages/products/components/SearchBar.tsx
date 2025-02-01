import { useStore } from "../store/useStore";
import useDebounce from "../hooks/useDebouce";

const SearchBar: React.FC = () => {
  const searchTerm = useStore((state) => state.searchTerm);
  const setSearchTerm = useStore((state) => state.setSearchTerm);
  const { debounce } = useDebounce();

  const handleSearch = debounce(300, (term: string) => {
    setSearchTerm(term);
  });

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    handleSearch(value);
  };

  return (
    <div className="input-container">
      <input className="styled-input" type="text" placeholder="Search products..." onChange={onChange} value={searchTerm} />
    </div>
  );
};

export default SearchBar;
