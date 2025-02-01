import { describe, it, expect, beforeEach, vi } from "vitest";
import { useStore } from "./useStore";

describe("useStore", () => {
  beforeEach(() => {
    useStore.setState({
      products: [],
      filteredProducts: [],
      loading: false,
      error: null,
      searchTerm: "",
      selectedCategories: [],
    });
  });

  it("fetches products successfully", async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([{ id: 1, title: "Product 1", price: 100, category: "Category 1", available: true }]),
      })
    );

    await useStore.getState().fetchProducts();

    const state = useStore.getState();
    expect(state.products).toHaveLength(1);
    expect(state.products[0].title).toBe("Product 1");
    expect(state.loading).toBe(false);
    expect(state.error).toBe(null);
  });

  it("sets search term and filters products", () => {
    useStore.setState({
      products: [
        { id: 1, title: "Product 1", price: 100, category: "Category 1", available: true },
        { id: 2, title: "Another Product", price: 200, category: "Category 2", available: true },
      ],
    });

    useStore.getState().setSearchTerm("Product 1");

    const state = useStore.getState();
    expect(state.searchTerm).toBe("Product 1");
    expect(state.filteredProducts).toHaveLength(1);
    expect(state.filteredProducts[0].title).toBe("Product 1");
  });

  it("sets categories and filters products", () => {
    useStore.setState({
      products: [
        { id: 1, title: "Product 1", price: 100, category: "Category 1", available: true },
        { id: 2, title: "Another Product", price: 200, category: "Category 2", available: true },
      ],
    });

    useStore.getState().setCategories(["Category 1"]);

    const state = useStore.getState();
    expect(state.selectedCategories).toEqual(["Category 1"]);
    expect(state.filteredProducts).toHaveLength(1);
    expect(state.filteredProducts[0].category).toBe("Category 1");
  });

  it("sorts products by price", () => {
    useStore.setState({
      products: [
        { id: 1, title: "Product 1", price: 200, category: "Category 1", available: true },
        { id: 2, title: "Another Product", price: 100, category: "Category 2", available: true },
      ],
      filteredProducts: [
        { id: 1, title: "Product 1", price: 200, category: "Category 1", available: true },
        { id: 2, title: "Another Product", price: 100, category: "Category 2", available: true },
      ],
    });

    // Sort ascending
    useStore.getState().sortProductsByPrice(true);

    let state = useStore.getState();
    expect(state.filteredProducts[0].price).toBe(100);
    expect(state.filteredProducts[1].price).toBe(200);

    // Sort descending
    useStore.getState().sortProductsByPrice(false);

    state = useStore.getState();
    expect(state.filteredProducts[0].price).toBe(200);
    expect(state.filteredProducts[1].price).toBe(100);
  });

  it("resets filters", () => {
    useStore.setState({
      products: [
        { id: 1, title: "Product 1", price: 100, category: "Category 1", available: true },
        { id: 2, title: "Another Product", price: 200, category: "Category 2", available: true },
      ],
      searchTerm: "Product",
      selectedCategories: ["Category 1"],
      filteredProducts: [{ id: 1, title: "Product 1", price: 100, category: "Category 1", available: true }],
    });

    useStore.getState().resetFilters();

    const state = useStore.getState();
    expect(state.searchTerm).toBe("");
    expect(state.selectedCategories).toEqual([]);
    expect(state.filteredProducts).toHaveLength(2);
  });
});
