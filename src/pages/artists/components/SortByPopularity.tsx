import { useStore } from "../store/useStore";

export const SortByPopularity = () => {
  // Subscribing to a state property instead of the entire state to prevent re-render on any store change.
  // E.g const { sortArtistsByPopularity } = useStore() would trigger unnecessary re-renders
  const sortArtistsByPopularity = useStore((state) => state.sortArtistsByPopularity);

  return (
    <div className="popularity-sort">
      <p>Show most popular</p>
      <a
        onClick={() => {
          sortArtistsByPopularity(true);
        }}
      >
        least
      </a>
      <a
        onClick={() => {
          sortArtistsByPopularity(false);
        }}
      >
        most
      </a>
    </div>
  );
};
