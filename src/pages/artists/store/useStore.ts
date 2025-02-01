import { create } from "zustand";
import { persist } from "zustand/middleware";

const fetchProducts = async (set: unknown, get: unknown) => {
  try {
    const response = await fetch(`https://appdevcom.recordunion.com/api/search/spotify/name?name=${get().searchTerm}&offset=${get().offset}&limit=${get().limit}`);

    const data = await response.json();

    set((state: unknown) => {
      const whitelistedArtists = data.filter((item: { blacklisted: unknown }) => !item.blacklisted);
      return {
        ...state,
        artists: [...state.artists, ...whitelistedArtists],
        loading: false,
      };
    });
  } catch {
    set({ loading: false, error: "Failed to fetch artists" });
  }
};

export const useStore = create(
  persist(
    (set, get) => ({
      artists: [],
      loading: false,
      error: null,
      limit: 10,
      offset: 0,
      searchTerm: "",
      selectedArtist: null,
      fetchProducts: async (searchTerm: unknown) => {
        set({ loading: true, error: null, offset: 0, searchTerm, artists: [] });
        fetchProducts(set, get);
      },
      fetchMore: async () => {
        set((state: { offset: unknown; limit: unknown }) => ({ loading: false, error: null, offset: state.offset + state.limit + 1 }));
        fetchProducts(set, get);
      },
      sortArtistsByPopularity: (ascending = true) => {
        set((state: unknown) => {
          const sortedArtists = [...state.artists].sort((a, b) => (ascending ? a.popularity - b.popularity : b.popularity - a.popularity));
          return { ...state, artists: sortedArtists };
        });
      },
      addSelectedArtist: (selectedArtist: unknown) => {
        set((state: unknown) => {
          return { ...state, selectedArtist };
        });
      },
    }),
    {
      name: "artist-store",
    }
  )
);
