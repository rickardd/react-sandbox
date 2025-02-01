import { useStore } from "../store/useStore";

export const ResetFilterButton = () => {
  const resetFilters = useStore((state) => state.resetFilters);

  return <a onClick={resetFilters}>Reset Filters</a>;
};
