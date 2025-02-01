import "./Products.css";
import ProductList from "./components/ProductList";
import { DarModeButton } from "./components/DarkModeButton";
import { ResetFilterButton } from "./components/ResetFilterButton";
import SearchBar from "./components/SearchBar";
import { Filter } from "./components/Filters";
import { SortByPrice } from "./components/SortByPriceButton";

function Products() {
  return (
    <>
      <div className="mb-12">
        <DarModeButton />
      </div>
      <div className="mb-12">
        <SearchBar />
        <ResetFilterButton></ResetFilterButton>
      </div>
      <div className="mb-12">
        <SortByPrice />
      </div>
      <div className="mb-12">
        <Filter />
      </div>
      <ProductList></ProductList>
    </>
  );
}

export default Products;
