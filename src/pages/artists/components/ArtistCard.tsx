import { useStore } from "../store/useStore";

const ArtistCard = ({ artist }) => {
  const addSelectedArtist = useStore((state) => state.addSelectedArtist);

  const thumbnailUrl = artist.images[2]?.url;
  const spotifyUrl = artist.external_urls?.spotify;

  return (
    <article key={artist.id} className="item-card">
      {thumbnailUrl && (
        <div>
          <img src={thumbnailUrl} />
        </div>
      )}

      <div className="flex-vertical">
        <span className="item-info">{artist.name}</span>
        <a href={spotifyUrl} target="_blank">
          Go to artist page
        </a>
      </div>
      <div>
        <button
          className="item-button"
          onClick={() => {
            addSelectedArtist(artist);
          }}
        >
          My artist
        </button>
      </div>
    </article>
  );
};

export default ArtistCard;
