import { useStore } from "../store/useStore";
import ArtistCard from "./ArtistCard";
import { SortByPopularity } from "./SortByPopularity";

const ArtistList = () => {
  const artists = useStore((state) => state.artists);
  const selectedArtist = useStore((state) => state.selectedArtist);
  const loading = useStore((state) => state.loading);
  const error = useStore((state) => state.error);
  const fetchMore = useStore((state) => state.fetchMore);

  // This could be done with suspense and an error boundary components instead
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <div className="card">
        <div>
          <h2>Spotify URI</h2>
          <p>
            Lorem ipsum dolor, <strong>sit amet consectetur adipisicing elit</strong>. Necessitatibus doloribus tempore minima accusamus, repudiandae sed natus qui molestias laborum totam enim.
          </p>
          <p>Totam numquam assumenda magnam accusantium illum corrupti cum aliquid voluptatum rem quasi facilis ratione officia, quidem aliquam soluta.</p>
        </div>

        <article className="item-card">
          <div className="flex-vertical">
            <span className="test-xs">Artist name</span>
            <span className="test-s">{selectedArtist.name}</span>
          </div>
          <div>
            <span>edit-icon</span>
          </div>
        </article>

        <div className="flex justify-end">
          <button className="item-button">Assign new Spotify Artist URI</button>
        </div>

        <SortByPopularity />

        <div className="mb-24">
          {artists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </div>
        <div className="flex justify-end">
          <button
            className="item-button"
            onClick={() => {
              fetchMore();
            }}
          >
            Show more
          </button>
        </div>
      </div>
    </>
  );
};

export default ArtistList;
