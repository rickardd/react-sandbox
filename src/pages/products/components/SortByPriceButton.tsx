import { useStore } from "../store/useStore";

export const SortByPrice = () => {
  // Subscribing to a state property instead of the entire state to prevent re-render on any store change.
  // E.g this will trigger unnecessary re-renders const { sortProductsByPrice } = useStore();
  const sortProductsByPrice = useStore((state) => state.sortProductsByPrice);

  return (
    <>
      <p>Sort by price</p>
      <div className="flex flex-gap">
        <a
          onClick={() => {
            sortProductsByPrice(true);
          }}
        >
          Lowest first
        </a>

        <a
          onClick={() => {
            sortProductsByPrice(false);
          }}
        >
          Highest first
        </a>
      </div>
    </>
  );
};
