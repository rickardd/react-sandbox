import { useStore } from "./useStore";
import { act } from "react-dom/test-utils";

describe("useStore", () => {
  beforeEach(() => {
    useStore.setState({
      artists: [],
      loading: false,
      error: null,
      limit: 10,
      offset: 0,
      searchTerm: "",
      selectedArtist: null,
    });
  });

  it("should initialize with default state", () => {
    const state = useStore.getState();
    expect(state.artists).toEqual([]);
    expect(state.loading).toBe(false);
    expect(state.error).toBe(null);
    expect(state.limit).toBe(10);
    expect(state.offset).toBe(0);
    expect(state.searchTerm).toBe("");
    expect(state.selectedArtist).toBe(null);
  });

  it("should set loading to true and reset error and offset when fetchProducts is called", async () => {
    await act(async () => {
      useStore.getState().fetchProducts("test");
    });
    const state = useStore.getState();
    expect(state.loading).toBe(true);
    expect(state.error).toBe(null);
    expect(state.offset).toBe(0);
    expect(state.searchTerm).toBe("test");
  });

  it("should sort artists by popularity in ascending order", () => {
    useStore.setState({
      artists: [
        { id: 1, popularity: 50 },
        { id: 2, popularity: 30 },
        { id: 3, popularity: 70 },
      ],
    });
    useStore.getState().sortArtistsByPopularity(true);
    const state = useStore.getState();
    expect(state.artists).toEqual([
      { id: 2, popularity: 30 },
      { id: 1, popularity: 50 },
      { id: 3, popularity: 70 },
    ]);
  });

  it("should sort artists by popularity in descending order", () => {
    useStore.setState({
      artists: [
        { id: 1, popularity: 50 },
        { id: 2, popularity: 30 },
        { id: 3, popularity: 70 },
      ],
    });
    useStore.getState().sortArtistsByPopularity(false);
    const state = useStore.getState();
    expect(state.artists).toEqual([
      { id: 3, popularity: 70 },
      { id: 1, popularity: 50 },
      { id: 2, popularity: 30 },
    ]);
  });

  it("should add selected artist", () => {
    const artist = { id: 1, name: "Artist" };
    useStore.getState().addSelectedArtist(artist);
    const state = useStore.getState();
    expect(state.selectedArtist).toEqual(artist);
  });
});
